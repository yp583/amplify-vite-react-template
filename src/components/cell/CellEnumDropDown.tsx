import { Observation } from "../../AltrixDataModels";
import Select, { MultiValue, SingleValue, ActionMeta } from "react-select";
import type { SelectInstance } from "react-select";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Rule } from "../../testData/rules";
import React from "react";

interface CellEnumDropDownProps {
  selectedObservation: Observation;
  updateSelectedObservation: (observation: Partial<Observation> | null) => void;
  editCellRef: React.RefObject<SelectInstance<OptionType> | null>;
  // Rule-driven props
  rule?: Rule;
  onRuleSelection?: (ruleId: string, values: string[]) => void;
  isVisible?: boolean;
}

export type OptionType = {
  value: string;
  label: string;
};

interface TagsDisplayProps {
  selectedValues: string[];
  onRemoveValue: (value: string, e?: React.MouseEvent) => void;
}

const TagsDisplay: React.FC<TagsDisplayProps> = ({ selectedValues, onRemoveValue }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {selectedValues.map((value) => (
        <div
          key={value}
          className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
        >
          <span>{value}</span>
          <button
            onClick={(e) => onRemoveValue(value, e)}
            className="hover:bg-blue-200 rounded-full p-0.5"
          >
            <XMarkIcon className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

const CellEnumDropDown = ({
  selectedObservation,
  updateSelectedObservation,
  editCellRef,
  rule,
  onRuleSelection,
  isVisible = true,
}: CellEnumDropDownProps) => {
  const options =
    selectedObservation?.choices?.map((choice) => ({
      value: choice,
      label: choice,
    })) ?? [];

  const handleChange = (
    newValue: MultiValue<OptionType> | SingleValue<OptionType>,
    _actionMeta: ActionMeta<OptionType>
  ) => {
    if (newValue && Array.isArray(newValue)) {
      // MultiValue case
      const values = newValue.map(option => option.value);
      updateSelectedObservation({
        value: values,
      });
      
      // Handle rule-driven logic
      if (rule && onRuleSelection) {
        onRuleSelection(rule.id, values);
      }
    } else if (newValue && !Array.isArray(newValue) && 'value' in newValue) {
      // SingleValue case (shouldn't happen with isMulti, but TypeScript requires it)
      updateSelectedObservation({
        value: [newValue.value],
      });
      
      // Handle rule-driven logic
      if (rule && onRuleSelection) {
        onRuleSelection(rule.id, [newValue.value]);
      }
    } else {
      // null case
      updateSelectedObservation({
        value: [],
      });
      
      // Handle rule-driven logic
      if (rule && onRuleSelection) {
        onRuleSelection(rule.id, []);
      }
    }
  };

  const removeValue = (valueToRemove: string, e?: React.MouseEvent) => {
    // Prevent event bubbling to avoid deselecting the cell
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    const currentValues = selectedObservation?.value || [];
    const newValues = currentValues.filter(value => value !== valueToRemove);
    updateSelectedObservation({
      value: newValues,
    });
    
    // Handle rule-driven logic
    if (rule && onRuleSelection) {
      onRuleSelection(rule.id, newValues);
    }
  };

  const selectedValues = selectedObservation?.value || [];

  // Don't render if not visible due to rule logic
  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="w-full mb-2" 
      onClick={(e) => e.stopPropagation()}
    >
      {/* Multi-Select Dropdown */}
      <Select
        isMulti
        value={selectedValues.map(value => ({
          value,
          label: value,
        }))}
        onChange={handleChange}
        options={options}
        placeholder="Select options..."
        unstyled
        classNames={{
          container: () => "w-full h-8 mb-2",
          control: ({ isFocused }) =>
            `w-full min-h-8 overflow-hidden border-2 px-2 bg-background-1 hover:bg-background-2 rounded-lg
             ${isFocused ? "border-primary" : "border-transparent"}`,
          menu: () =>
            "w-full bg-background-1 rounded-lg overflow-hidden outline-2 outline-primary mt-4",
          option: ({ isFocused, isSelected }) =>
            `flex justify-center items-center w-full h-fit p-2 ${isSelected ? "bg-background-2" : isFocused ? "bg-background-2" : ""}`,
          dropdownIndicator: () => "h-5 w-5",
          multiValue: () => "!hidden", // Hide default multi-value display since we have custom tags
          multiValueLabel: () => "!hidden",
          multiValueRemove: () => "!hidden",
        }}
        ref={editCellRef}
      />
      
      {/* Selected Tags Below Input */}
      {selectedValues.length > 0 && (
        <TagsDisplay 
          selectedValues={selectedValues} 
          onRemoveValue={removeValue}
        />
      )}
    </div>
  );
};

export default CellEnumDropDown;
