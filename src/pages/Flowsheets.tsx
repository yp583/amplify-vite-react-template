import AltrixScreenWrapper from "../components/AltrixScreenWrapper";
import FlowsheetHeader from "../components/flowsheet/FlowsheetHeader";
import FlowsheetValueColumn from "../components/flowsheet/FlowsheetValueColumn";
import FlowsheetNameColumn from "../components/flowsheet/FlowsheetNameColumn";
import CellView from "../components/cell/CellView";
import { useEffect, useRef, useState } from "react";
import { getAltrixAudio } from "../services/internal/audio.service";
import AudioAndTranscriptView from "../components/audio/AudioAndTranscriptView";
import {
  CollapsedRows,
  Flowsheet,
  FlowsheetConfig,
  SelectedObservationPath,
  Observation,
} from "../AltrixDataModels";
import FlowsheetPageHeader from "../components/flowsheet/FlowsheetPageHeader";
import { getPatientFlowsheet } from "../services/internal/flowsheet.service";
import { useAppData } from "../hooks/useAppData";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import type { SelectInstance } from "react-select";
import type { OptionType } from "../components/cell/CellEnumDropDown";

const audioList = Array.of(getAltrixAudio());

const Flowsheets = () => {
  const [currentFlowsheet, setCurrentFlowsheet] = useState<Flowsheet>(
    {} as Flowsheet,
  );

  const { selectedPatient, getSelectedFlowsheetConfig } = useAppData();
  const [selectedFlowsheetConfig, setSelectedFlowsheetConfig] =
    useState<FlowsheetConfig | null>(getSelectedFlowsheetConfig());

  const editCellRef = useRef<
    HTMLInputElement | SelectInstance<OptionType> | null
  >(null);

  useEffect(() => {
    const flowsheet = getPatientFlowsheet(
      selectedPatient.id,
      selectedFlowsheetConfig?.id || "",
    );
    setCurrentFlowsheet(flowsheet);
  }, [selectedPatient, selectedFlowsheetConfig]);

  const [selectedObservationPath, setSelectedObservationPath] =
    useState<SelectedObservationPath | null>(null);
  const [collapsedRows, setCollapsedRows] = useState<CollapsedRows>({
    collapsed: {},
  });

  const [flowsheetViewFocused, setFlowsheetViewFocused] = useState(false);
  const [cellViewFocused, setCellViewFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    const element = e.target.closest("[data-name]");
    const name = element?.getAttribute("data-name");

    if (name === "flowsheetView") {
      setFlowsheetViewFocused(true);
      setCellViewFocused(false);
    } else if (name === "cellView") {
      setCellViewFocused(true);
      setFlowsheetViewFocused(false);
    }
  };

  const updateSelectedObservation = (
    updatedObservation: Partial<Observation> | null,
  ) => {
    if (updatedObservation) {
      const instanceId = selectedObservationPath?.flowsheetInstanceIndex || 0;
      const groupId = selectedObservationPath?.groupIndex || 0;
      const observationId = selectedObservationPath?.observationIndex || 0;

      Object.assign(
        currentFlowsheet.flowsheetInstances[instanceId].groups[groupId]
          .observations[observationId],
        updatedObservation,
      );
      setCurrentFlowsheet({ ...currentFlowsheet });
    } else {
      setSelectedObservationPath(null);
    }
  };

  useEffect(() => {
    setSelectedFlowsheetConfig(getSelectedFlowsheetConfig());
  }, [getSelectedFlowsheetConfig]);

  useEffect(() => {
    if (!(flowsheetViewFocused || cellViewFocused)) {
      setSelectedObservationPath(null);
    }
  }, [flowsheetViewFocused, cellViewFocused]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget;
    const relatedTargetElement = relatedTarget?.closest("[data-name]");
    const relatedTargetName = relatedTargetElement?.getAttribute("data-name");
    if (relatedTarget) {
      //readable
      if (
        relatedTargetName === "flowsheetView" ||
        relatedTargetName === "cellView"
      ) {
        return;
      }
    }

    const element = e.target.closest("[data-name]");
    const name = element?.getAttribute("data-name");

    if (name === "flowsheetView") {
      setFlowsheetViewFocused(false);
    } else if (name === "cellView") {
      setCellViewFocused(false);
    }
  };

  const [selectedObservation, setSelectedObservation] =
    useState<Observation | null>(null);

  useEffect(() => {
    if (selectedObservationPath) {
      setSelectedObservation(
        currentFlowsheet.flowsheetInstances[
          selectedObservationPath.flowsheetInstanceIndex
        ].groups[selectedObservationPath.groupIndex].observations[
        selectedObservationPath.observationIndex
        ],
      );
    } else {
      setSelectedObservation(null);
    }
  }, [selectedObservationPath, currentFlowsheet]);

  useEffect(() => {
    setCollapsedRows({ collapsed: {} });
  }, [selectedPatient, currentFlowsheet]);

  const [_droppedAudio, setDroppedAudio] = useState<any>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log("Drag End Event:", event, active.id); // Log the event object

    if (over) {
      const matchedAudio = audioList.find(
        (audio) => audio.id.toString() === active.id,
      );

      if (matchedAudio) {
        console.log("Dropped audio object:", matchedAudio);
        setDroppedAudio({
          audio: matchedAudio,
          targetColumnId: over.id,
        });

        // Additional logic...
      } else {
        console.log("Dropped outside any droppable");
      }
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent) => {
    const updatedIndices = selectedObservationPath;
    if (!updatedIndices) {
      return;
    }

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault(); // Prevent page scrolling
        if (updatedIndices.observationIndex > 0) {
          updatedIndices.observationIndex = updatedIndices.observationIndex - 1;
        } else if (updatedIndices.groupIndex > 0) {
          updatedIndices.groupIndex = updatedIndices.groupIndex - 1;
          updatedIndices.observationIndex =
            currentFlowsheet.flowsheetInstances[
              updatedIndices.flowsheetInstanceIndex
            ].groups[updatedIndices.groupIndex].observations.length - 1;
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (
          updatedIndices.observationIndex <
          currentFlowsheet.flowsheetInstances[
            updatedIndices.flowsheetInstanceIndex
          ].groups[updatedIndices.groupIndex].observations.length -
          1
        ) {
          updatedIndices.observationIndex = updatedIndices.observationIndex + 1;
        } else if (
          updatedIndices.groupIndex <
          currentFlowsheet.flowsheetInstances[
            updatedIndices.flowsheetInstanceIndex
          ].groups.length -
          1
        ) {
          updatedIndices.groupIndex = updatedIndices.groupIndex + 1;
          updatedIndices.observationIndex = 0;
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (updatedIndices.flowsheetInstanceIndex > 0) {
          updatedIndices.flowsheetInstanceIndex =
            updatedIndices.flowsheetInstanceIndex - 1;
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        if (
          updatedIndices.flowsheetInstanceIndex <
          currentFlowsheet.flowsheetInstances.length - 1
        ) {
          updatedIndices.flowsheetInstanceIndex =
            updatedIndices.flowsheetInstanceIndex + 1;
        }
        break;
      default:
        // handleEditObservation(e);
        break;
    }
    setSelectedObservationPath({ ...updatedIndices });
  };

  return (
    <AltrixScreenWrapper>
      <FlowsheetPageHeader />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="w-full h-7/8 flex flex-row">
          <div className="w-5/7 h-full pl-6 pr-6 pt-2 pb-6 overflow-y-auto">
            <FlowsheetHeader name={selectedFlowsheetConfig?.name || ""} />
            <div
              className="w-full flex flex-row border-2 border-separator"
              onKeyDown={(e) => {
                handleKeyDown(e);
              }}
            >
              {currentFlowsheet.flowsheetInstances && (
                <>
                  <FlowsheetNameColumn
                    flowsheetInstance={currentFlowsheet.flowsheetInstances[0]}
                    collapsedRows={collapsedRows}
                    setCollapsedRows={setCollapsedRows}
                    collapsibleConfig={
                      selectedFlowsheetConfig?.collapsibleConfig || {
                        config: {},
                      }
                    }
                  />
                  <div
                    className="flex w-full"
                    data-name="flowsheetView"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    {currentFlowsheet.flowsheetInstances.map(
                      (flowsheetInstance, flowsheetInstanceIndex) => (
                        <FlowsheetValueColumn
                          key={flowsheetInstanceIndex}
                          flowsheetInstance={flowsheetInstance}
                          flowsheetInstanceIndex={flowsheetInstanceIndex}
                          collapsedRows={collapsedRows}
                          selectedObservationPath={selectedObservationPath}
                          setSelectedObservationPath={
                            setSelectedObservationPath
                          }
                          updateSelectedObservation={updateSelectedObservation}
                          droppableId={flowsheetInstanceIndex}
                          editCellRef={editCellRef}
                          ruleState={{}}
                          onRuleSelection={() => {}}
                          isObservationVisible={() => true}
                        />
                      ),
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="w-2/7 h-full pr-4 pb-4 pt-2"
            data-name="cellView"
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0}
          >
            {selectedObservationPath ? (
              <CellView
                selectedObservation={selectedObservation}
                setSelectedObservationPath={setSelectedObservationPath}
                updateSelectedObservation={updateSelectedObservation}
                editCellRef={editCellRef}
                state={{}}
              />
            ) : (
              <AudioAndTranscriptView audioList={audioList} />
            )}
          </div>
        </div>
      </DndContext>
    </AltrixScreenWrapper>
  );
};

export default Flowsheets;
