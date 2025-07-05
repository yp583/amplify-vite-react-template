import React, { useState, useEffect, useRef } from 'react';
import yaml from 'js-yaml';
import AltrixScreenWrapper from './AltrixScreenWrapper';
import FlowsheetHeader from './flowsheet/FlowsheetHeader';
import FlowsheetValueColumn from './flowsheet/FlowsheetValueColumn';
import FlowsheetNameColumn from './flowsheet/FlowsheetNameColumn';
import CellView from './cell/CellView';
import TranscriptView from './transcript/TranscriptView';
import {
  CollapsedRows,
  Flowsheet,
  SelectedObservationPath,
  Observation,
  FlowsheetInstance,
  Group,
  CollapsibleConfig
} from '../AltrixDataModels';
import type { SelectInstance } from "react-select";
import type { OptionType } from "./cell/CellEnumDropDown";
import { ruleMap, Rule } from '../testData/rules';
import { testRules } from '../testData/testRules';
import { StateMap, isRuleVisible, handleRuleSelection as handleRuleJumpLogic } from '../utils/ruleEvaluator';
import { getAltrixAudio } from '../services/internal/audio.service';

interface ObservationConfig {
  ehr_id: string;
  display_name: string;
  order_id: number;
  choices?: string[];
  hidden: boolean;
  collapsible_configs?: any[];
  min_val?: number;
  max_val?: number;
  units?: string;
}

interface GroupConfig {
  ehr_id: string;
  name: string;
  order_id: number;
  observation_configs: ObservationConfig[];
}

interface FlowsheetConfigData {
  ehr_id: string;
  name: string;
  group_configs: GroupConfig[];
}

interface AdultPCSData {
  flowsheet_configs: FlowsheetConfigData[];
}

const audioList = Array.of(getAltrixAudio());

const AdultPCSFlowsheet: React.FC = () => {
  const [flowsheetData, setFlowsheetData] = useState<Flowsheet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedObservationPath, setSelectedObservationPath] = useState<SelectedObservationPath | null>(null);
  const [persistentSelectedCell, setPersistentSelectedCell] = useState<SelectedObservationPath | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [collapsedRows, setCollapsedRows] = useState<CollapsedRows>({ collapsed: {} });
  const [selectedObservation, setSelectedObservation] = useState<Observation | null>(null);
  const editCellRef = useRef<HTMLInputElement | SelectInstance<OptionType> | null>(null);
  
  // Rule-driven state
  const [ruleState, setRuleState] = useState<StateMap>({});
  const [hiddenRows, setHiddenRows] = useState<Set<string>>(new Set());
  
  // Pagination state
  const [visibleGroupsCount, setVisibleGroupsCount] = useState<number>(5); // Start with 5 groups
  const [allGroups, setAllGroups] = useState<Group[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  
  // Throttling refs
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadYamlData();
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const loadYamlData = async () => {
    try {
      console.log('Loading YAML data...');
      const response = await fetch('/Adult_PCS.yaml');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const yamlText = await response.text();
      console.log('YAML content length:', yamlText.length);
      console.log('First 500 characters:', yamlText.substring(0, 500));
      
      const data = yaml.load(yamlText) as AdultPCSData;
      console.log('Parsed YAML data:', data);
      
      if (!data || !data.flowsheet_configs || data.flowsheet_configs.length === 0) {
        throw new Error('Invalid YAML structure - no flowsheet_configs found');
      }
      
      // Convert YAML data to Flowsheet format
      const flowsheet = convertYamlToFlowsheet(data);
      console.log('Converted flowsheet:', flowsheet);
      
      // Validate flowsheet structure
      if (!flowsheet.flowsheetInstances || flowsheet.flowsheetInstances.length === 0) {
        throw new Error('Invalid flowsheet structure - no flowsheet instances found');
      }
      
      const allGroupsData = flowsheet.flowsheetInstances[0].groups;
      console.log('Setting allGroups with', allGroupsData.length, 'groups');
      
      // Store all groups for pagination
      setAllGroups(allGroupsData);
      
      // Create initial flowsheet with only first few groups
      const initialFlowsheet = {
        ...flowsheet,
        flowsheetInstances: [{
          ...flowsheet.flowsheetInstances[0],
          groups: allGroupsData.slice(0, visibleGroupsCount)
        }]
      };
      
      console.log('Setting initial flowsheet with', visibleGroupsCount, 'groups');
      setFlowsheetData(initialFlowsheet);
    } catch (error) {
      console.error('Error loading YAML data:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Load more groups when scrolling
  const loadMoreGroups = async () => {
    console.log('loadMoreGroups called:', { 
      isLoadingMore, 
      visibleGroupsCount, 
      allGroupsLength: allGroups.length,
      flowsheetDataExists: !!flowsheetData 
    });
    
    if (isLoadingMore) {
      console.log('Already loading more groups, skipping...');
      return;
    }
    
    if (allGroups.length === 0) {
      console.warn('allGroups is empty, cannot load more groups');
      return;
    }
    
    if (visibleGroupsCount >= allGroups.length) {
      console.log('All groups already visible');
      return;
    }
    
    try {
      setIsLoadingMore(true);
      
      // Simulate loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const newVisibleCount = Math.min(visibleGroupsCount + 5, allGroups.length);
      console.log('Setting new visible count:', newVisibleCount);
      
      // Update flowsheet with more groups
      if (flowsheetData && flowsheetData.flowsheetInstances && flowsheetData.flowsheetInstances.length > 0) {
        const updatedFlowsheet = {
          ...flowsheetData,
          flowsheetInstances: [{
            ...flowsheetData.flowsheetInstances[0],
            groups: allGroups.slice(0, newVisibleCount)
          }]
        };
        console.log('Updating flowsheet with', newVisibleCount, 'groups');
        setFlowsheetData(updatedFlowsheet);
        setVisibleGroupsCount(newVisibleCount);
      } else {
        console.warn('flowsheetData is null or invalid, cannot update');
      }
    } catch (error) {
      console.error('Error loading more groups:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Handle scroll to load more with throttling
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log('Scroll event triggered'); // Debug log to see if scroll is working
    
    const now = Date.now();
    
    // Throttle scroll events to prevent excessive calls
    if (now - lastScrollTimeRef.current < 50) {
      return;
    }
    lastScrollTimeRef.current = now;
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Debounce the scroll handler
    scrollTimeoutRef.current = setTimeout(() => {
      try {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
        
        console.log('Scroll position:', {
          scrollTop,
          scrollHeight,
          clientHeight,
          scrollPercentage,
          isLoadingMore,
          visibleGroupsCount,
          allGroupsLength: allGroups.length
        });
        
        // Load more when user scrolls to 60% of the content (even more sensitive)
        if (scrollPercentage > 0.6 && !isLoadingMore && visibleGroupsCount < allGroups.length) {
          console.log('Auto-loading more groups due to scroll position:', scrollPercentage);
          loadMoreGroups();
        }
      } catch (error) {
        console.error('Error in scroll handler:', error);
      }
    }, 30);
  };

  const convertYamlToFlowsheet = (data: AdultPCSData): Flowsheet => {
    const flowsheetConfig = data.flowsheet_configs[0];
    
    // Create groups from group_configs - show all groups regardless of hidden status
    const groups: Group[] = flowsheetConfig.group_configs
      .sort((a, b) => a.order_id - b.order_id)
      .map(group => {
        console.log(`Processing group: ${group.name} (${group.observation_configs.length} observations)`);
        
        const observations: Observation[] = group.observation_configs
          .filter(obs => !obs.hidden) // Only filter out observations that are explicitly hidden
          .sort((a, b) => a.order_id - b.order_id)
          .map(obs => {
            const observation = {
              id: obs.ehr_id,
              code: obs.ehr_id,
              displayName: obs.display_name,
              dateTime: new Date().toISOString(),
              value: [], // Initialize as empty array for multiple selections
              patientId: 'AZ1248',
              choices: obs.choices || [],
              units: obs.units
            };
            
            // Debug: Log all observations, especially those without choices
            if (!obs.choices || obs.choices.length === 0) {
              console.log(`  - ${obs.display_name}: NO CHOICES (should be editable)`);
            } else {
              console.log(`  - ${obs.display_name}: ${obs.choices.length} choices`);
            }
            
            return observation;
          });

        console.log(`  Group ${group.name}: ${observations.length} visible observations`);

        return {
          id: group.ehr_id,
          name: group.name,
          observations
        };
      })
      .filter(group => group.observations.length > 0); // Only show groups that have visible observations

    console.log(`Total groups: ${groups.length}`);
    const totalObservations = groups.reduce((sum, group) => sum + group.observations.length, 0);
    console.log(`Total observations: ${totalObservations}`);

    // Create flowsheet instance
    const flowsheetInstance: FlowsheetInstance = {
      id: 'adult-pcs-instance',
      dateTime: new Date().toISOString(),
      groups
    };

    return {
      id: 'adult-pcs',
      configId: flowsheetConfig.ehr_id,
      flowsheetInstances: [flowsheetInstance]
    };
  };

  // Simplified click handler to deselect cells when clicking outside
  const handleGlobalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    
    // Check if click is on a cell or cell-related content
    const isClickOnCell = target.closest('[data-cell="true"]');
    const isClickOnCellView = target.closest('[data-name="cellView"]');
    
    // If click is not on a cell or cell view, deselect
    if (!isClickOnCell && !isClickOnCellView) {
      setSelectedObservationPath(null);
      setPersistentSelectedCell(null);
      setShowTranscript(true);
    }
  };

  const updateSelectedObservation = (updatedObservation: Partial<Observation> | null) => {
    if (updatedObservation && flowsheetData && selectedObservationPath) {
      const instanceId = selectedObservationPath.flowsheetInstanceIndex || 0;
      const groupId = selectedObservationPath.groupIndex || 0;
      const observationId = selectedObservationPath.observationIndex || 0;

      Object.assign(
        flowsheetData.flowsheetInstances[instanceId].groups[groupId].observations[observationId],
        updatedObservation
      );
      setFlowsheetData({ ...flowsheetData });
    } else {
      setSelectedObservationPath(null);
    }
  };

  // Rule-driven selection handler
  const handleRuleSelection = (ruleId: string, values: string[]) => {
    setRuleState(prev => ({ ...prev, [ruleId]: values }));
    const rule = ruleMap.get(ruleId);
    if (rule) {
      handleRuleJumpLogic(rule, ruleState, setRuleState, setHiddenRows, hiddenRows);
    }
  };

  // Get rule for an observation
  const getRuleForObservation = (observation: Observation): Rule | undefined => {
    // Use test rules for demonstration
    const testRule = testRules.find(r => r.id === observation.id);
    if (testRule) return testRule;
    
    // Fall back to actual rules
    return ruleMap.get(observation.id);
  };

  // Check if observation should be visible based on rule logic
  const isObservationVisible = (observation: Observation): boolean => {
    const rule = getRuleForObservation(observation);
    if (!rule) return true; // No rule means always visible
    
    if (hiddenRows.has(rule.id)) return false;
    return isRuleVisible(rule, ruleState);
  };

  // Remove the old focus/blur logic - using click-based deselection instead

  useEffect(() => {
    if (selectedObservationPath && flowsheetData) {
      setSelectedObservation(
        flowsheetData.flowsheetInstances[selectedObservationPath.flowsheetInstanceIndex]
          .groups[selectedObservationPath.groupIndex]
          .observations[selectedObservationPath.observationIndex]
      );
      setPersistentSelectedCell(selectedObservationPath);
      setShowTranscript(false);
    } else {
      setSelectedObservation(null);
      setPersistentSelectedCell(null);
      setShowTranscript(true);
    }
  }, [selectedObservationPath, flowsheetData]);

  // Ensure visibleGroupsCount doesn't exceed allGroups.length
  useEffect(() => {
    if (allGroups.length > 0 && visibleGroupsCount > allGroups.length) {
      console.log('Adjusting visibleGroupsCount to match allGroups.length');
      setVisibleGroupsCount(allGroups.length);
    }
  }, [allGroups.length, visibleGroupsCount]);

  // Auto-load more groups when component mounts if needed
  useEffect(() => {
    if (allGroups.length > 0 && visibleGroupsCount < allGroups.length && !isLoadingMore) {
      console.log('Auto-loading initial groups');
      loadMoreGroups();
    }
  }, [allGroups.length]); // Only run when allGroups changes

  // Intersection Observer for automatic loading
  useEffect(() => {
    if (allGroups.length === 0 || visibleGroupsCount >= allGroups.length || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoadingMore && visibleGroupsCount < allGroups.length) {
            console.log('Intersection observer triggered - loading more groups');
            loadMoreGroups();
          }
        });
      },
      {
        root: null,
        rootMargin: '200px', // Start loading 200px before reaching the bottom
        threshold: 0.1
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [allGroups.length, visibleGroupsCount, isLoadingMore]);

  // Create empty collapsible config (no collapsible sections for now)
  const collapsibleConfig: CollapsibleConfig = {
    config: {}
  };

  if (loading) {
    return (
      <AltrixScreenWrapper>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading Adult PCS flowsheet...</div>
        </div>
      </AltrixScreenWrapper>
    );
  }

  if (error) {
    return (
      <AltrixScreenWrapper>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </AltrixScreenWrapper>
    );
  }

  if (!flowsheetData) {
    return (
      <AltrixScreenWrapper>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-600">Error loading flowsheet data</div>
        </div>
      </AltrixScreenWrapper>
    );
  }

  return (
    <AltrixScreenWrapper>
      {/* A123 Header */}
      <div className="w-full bg-white text-black px-6 py-4">
        <h1 className="text-3xl font-bold text-left">A123</h1>
      </div>
      
      <div className="w-full h-full flex flex-row" onClick={handleGlobalClick}>
        <div className="w-2/3 h-full pl-6 pr-6 pt-2 pb-6 overflow-y-auto" onScroll={handleScroll}>
          <FlowsheetHeader name="AZ1248@Adult_PCS.yaml" />
          <div className="w-full flex flex-row border-2 border-separator">
            <FlowsheetNameColumn
              flowsheetInstance={flowsheetData.flowsheetInstances[0]}
              collapsedRows={collapsedRows}
              setCollapsedRows={setCollapsedRows}
              collapsibleConfig={collapsibleConfig}
            />
            <div
              className="flex w-full"
              data-name="flowsheetView"
            >
              {flowsheetData.flowsheetInstances.map((flowsheetInstance, flowsheetInstanceIndex) => (
                <FlowsheetValueColumn
                  key={flowsheetInstanceIndex}
                  flowsheetInstance={flowsheetInstance}
                  flowsheetInstanceIndex={flowsheetInstanceIndex}
                  collapsedRows={collapsedRows}
                  selectedObservationPath={selectedObservationPath}
                  setSelectedObservationPath={setSelectedObservationPath}
                  updateSelectedObservation={updateSelectedObservation}
                  droppableId={flowsheetInstanceIndex}
                  editCellRef={editCellRef}
                  // Rule-driven props
                  ruleState={ruleState}
                  onRuleSelection={handleRuleSelection}
                  isObservationVisible={isObservationVisible}
                  // Persistent selection props
                  persistentSelectedCell={persistentSelectedCell}
                />
              ))}
            </div>
          </div>
          
          {/* Loading indicator */}
          {isLoadingMore && (
            <div className="flex justify-center items-center py-4">
              <div className="text-gray-500">Loading more groups...</div>
            </div>
          )}
          
          {/* Sentinel element for intersection observer */}
          {!isLoadingMore && visibleGroupsCount < allGroups.length && (
            <div ref={sentinelRef} className="loading-sentinel h-4 w-full" />
          )}
          
          {/* Temporary manual trigger for testing */}
          {!isLoadingMore && visibleGroupsCount < allGroups.length && (
            <div className="flex justify-center items-center py-2">
              <button
                onClick={() => {
                  console.log('Manual trigger clicked');
                  loadMoreGroups();
                }}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                TEST: Load More ({visibleGroupsCount} of {allGroups.length})
              </button>
            </div>
          )}
          
          {/* End indicator */}
          {visibleGroupsCount >= allGroups.length && allGroups.length > 0 && (
            <div className="flex justify-center items-center py-4">
              <div className="text-gray-400 text-sm">All groups loaded ({allGroups.length} total)</div>
            </div>
          )}
        </div>
        <div
          className="w-1/3 h-full pr-4 pb-4 pt-2"
          data-name="cellView"
        >
          {selectedObservationPath ? (
            <CellView
              selectedObservation={selectedObservation}
              setSelectedObservationPath={setSelectedObservationPath}
              updateSelectedObservation={updateSelectedObservation}
              editCellRef={editCellRef}
              // Rule-driven props
              rule={selectedObservation ? getRuleForObservation(selectedObservation) : undefined}
              state={ruleState}
              onRuleSelection={handleRuleSelection}
            />
          ) : showTranscript ? (
            <TranscriptView 
              altrixAudio={audioList[0]} 
              setView={() => {}} 
            />
          ) : (
            <div className="text-gray-500 text-center mt-8">
              Select a cell to edit
            </div>
          )}
        </div>
      </div>
    </AltrixScreenWrapper>
  );
};

export default AdultPCSFlowsheet; 