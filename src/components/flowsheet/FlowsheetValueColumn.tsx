import { useDroppable } from "@dnd-kit/core";
import {
  CollapsedRows,
  FlowsheetInstance,
  Observation,
  SelectedObservationPath,
} from "../../AltrixDataModels";
import React from "react";
import { SelectInstance } from "react-select";
import { OptionType } from "../cell/CellEnumDropDown";
import { StateMap } from "../../utils/ruleEvaluator";

interface TagDisplayProps {
  values: string[];
}

const TagDisplay: React.FC<TagDisplayProps> = ({ values }) => {
  if (values.length === 0) {
    return null;
  }

  // Simple rule-based approach: if more than 3 tags, show first 2 + overflow
  if (values.length <= 3) {
    return (
      <div className="flex flex-wrap gap-1 justify-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs whitespace-nowrap"
          >
            {value}
          </div>
        ))}
      </div>
    );
  }

  // More than 3 tags: show first 2 + overflow count
  return (
    <div className="flex flex-wrap gap-1 justify-center">
      {values.slice(0, 2).map((value, index) => (
        <div
          key={index}
          className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs whitespace-nowrap"
        >
          {value}
        </div>
      ))}
      <div className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded text-xs whitespace-nowrap">
        +{values.length - 2}
      </div>
    </div>
  );
};

interface FlowsheetValueColumnProps {
  flowsheetInstance: FlowsheetInstance;
  flowsheetInstanceIndex: number;
  collapsedRows: CollapsedRows;
  selectedObservationPath: SelectedObservationPath | null;
  setSelectedObservationPath: (path: SelectedObservationPath | null) => void;
  updateSelectedObservation: (observation: Partial<Observation>) => void;
  editCellRef: React.RefObject<
    HTMLInputElement | SelectInstance<OptionType> | null
  >;
  droppableId: number;
  // Rule-driven props
  ruleState: StateMap;
  onRuleSelection: (ruleId: string, values: string[]) => void;
  isObservationVisible: (observation: Observation) => boolean;
  // Persistent selection props
  persistentSelectedCell?: SelectedObservationPath | null;
}

const FlowsheetValueColumn = ({
  flowsheetInstance,
  flowsheetInstanceIndex,
  collapsedRows,
  selectedObservationPath,
  setSelectedObservationPath,
  updateSelectedObservation: _updateSelectedObservation,
  droppableId,
  editCellRef: _editCellRef,
  ruleState: _ruleState,
  onRuleSelection: _onRuleSelection,
  isObservationVisible,
  persistentSelectedCell,
}: FlowsheetValueColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: droppableId,
  });

  const dropTargetStyle = {
    backgroundColor: isOver ? "#b8c0f5" : "inherit",
  };

  return (
    <div
      ref={setNodeRef}
      style={dropTargetStyle}
      className="w-full h-fit flex flex-col justify-start items-center"
    >
      {flowsheetInstance.groups.map((group, groupIndex) => (
        <React.Fragment key={group.id}>
          <div className="h-14 w-full border-t-4 border-primary"></div>
          <div key={group.id} className="w-full h-fit">
            {group.observations.map((observation, observationIndex) => {
              if (!isObservationVisible(observation)) return null;
              const isSelected =
                selectedObservationPath &&
                selectedObservationPath.flowsheetInstanceIndex ==
                flowsheetInstanceIndex &&
                selectedObservationPath.groupIndex == groupIndex &&
                selectedObservationPath.observationIndex == observationIndex;

              const isPersistentSelected =
                persistentSelectedCell &&
                persistentSelectedCell.flowsheetInstanceIndex ==
                flowsheetInstanceIndex &&
                persistentSelectedCell.groupIndex == groupIndex &&
                persistentSelectedCell.observationIndex == observationIndex;

              const isEditCell = !observation.choices || observation.choices.length === 0;

              // Debug logging
              if (isSelected) {
                console.log(`Selected observation "${observation.displayName}": isEditCell=${isEditCell}, choices=${observation.choices?.length || 0}`);
              }
              if (isPersistentSelected) {
                console.log(`Persistently selected: "${observation.displayName}"`);
              }

              if (collapsedRows.collapsed[observation.code]) {
                return <></>;
              }

              // Display multiple values as tags
              return (
                <div
                  key={observation.id}
                  data-cell="true"
                  className={`font-primary w-full min-h-8 text-center focus:outline-2 -outline-offset-2 focus:outline-primary focus:bg-background-1 focus:outline-dashed focus:rounded-md not-focus:border-1 not-focus:border-separator flex items-center justify-center p-1`}
                  style={isPersistentSelected ? { 
                    border: '2px dashed #6044fb',
                    borderRadius: '6px',
                    backgroundColor: 'var(--color-background-1)'
                  } : {}}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedObservationPath({
                      flowsheetInstanceIndex: flowsheetInstanceIndex,
                      groupIndex: groupIndex,
                      observationIndex: observationIndex,
                    });
                  }}
                >
                  {Array.isArray(observation.value) && observation.value.length > 0 ? (
                    <TagDisplay values={observation.value} />
                  ) : null}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default FlowsheetValueColumn;
