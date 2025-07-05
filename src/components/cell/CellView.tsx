import CellEnumDropDown from "./CellEnumDropDown";
import CellEditArea from "./CellEditArea";
import { Observation } from "../../AltrixDataModels";
import { SelectedObservationPath } from "../../AltrixDataModels";
import type { SelectInstance } from "react-select";
import type { OptionType } from "./CellEnumDropDown";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Rule } from "../../testData/rules";
import { StateMap, isRuleVisible } from "../../utils/ruleEvaluator";

interface CellViewProps {
  selectedObservation: Observation | null;
  setSelectedObservationPath: (path: SelectedObservationPath | null) => void;
  updateSelectedObservation: (observation: Partial<Observation> | null) => void;
  editCellRef: React.RefObject<
    HTMLInputElement | SelectInstance<OptionType> | null
  >;
  // Rule-driven props
  rule?: Rule;
  state: StateMap;
  onRuleSelection?: (ruleId: string, values: string[]) => void;
}

const CellView = ({
  selectedObservation,
  setSelectedObservationPath,
  updateSelectedObservation,
  editCellRef,
  rule,
  state,
  onRuleSelection,
}: CellViewProps) => {
  // Check if the observation should be visible based on rule logic
  const isVisible = rule ? isRuleVisible(rule, state) : true;

  return (
    <div
      className={`flex flex-col w-full h-full bg-background-2 p-6 rounded-2xl`}
    >
      <div className="relative flex w-full h-5 mb-8 items-center justify-center">
        <button
          className="absolute left-0 w-6 h-6"
          onClick={() => {
            setSelectedObservationPath(null);
          }}
        >
          <ChevronLeftIcon className="stroke-dark-text" strokeWidth={2} />
        </button>
        <p className="font-inter text-2xl font-medium justify-self-center text-dark-text">
          Observation Details
        </p>
      </div>
      <div className="flex flex-col w-full h-full">
        <p className="font-primary text-base font-medium">
          {selectedObservation?.displayName || "No Observation Selected"}
        </p>
        {selectedObservation?.choices && selectedObservation.choices.length > 0 ? (
          <CellEnumDropDown
            selectedObservation={selectedObservation}
            updateSelectedObservation={updateSelectedObservation}
            editCellRef={
              editCellRef as React.RefObject<SelectInstance<OptionType>>
            }
            rule={rule}
            onRuleSelection={onRuleSelection}
            isVisible={isVisible}
          />
        ) : (
          <CellEditArea
            selectedObservation={selectedObservation}
            updateSelectedObservation={updateSelectedObservation}
            editCellRef={editCellRef as React.RefObject<HTMLInputElement>}
          />
        )}
        
        <div>
          <p className="font-primary text-base font-medium">Comments</p>
          <textarea
            className="w-full h-56 bg-background-1 rounded-lg p-2 focus:outline-primary"
            value={selectedObservation?.comments || ""}
            onChange={(e) => {
              if (selectedObservation) {
                updateSelectedObservation({
                  comments: e.target.value,
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CellView;
