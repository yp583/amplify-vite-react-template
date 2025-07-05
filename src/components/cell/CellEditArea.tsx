import { useRef, useState } from "react";
import { Observation } from "../../AltrixDataModels";

interface CellEditAreaProps {
  selectedObservation: Observation | null;
  updateSelectedObservation: (observation: Partial<Observation> | null) => void;
  editCellRef: React.RefObject<HTMLInputElement | null>;
}

const CellEditArea = ({
  selectedObservation,
  updateSelectedObservation,
  editCellRef,
}: CellEditAreaProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const trimmedValue = inputValue.trim();
      if (trimmedValue.length > 0) {
        // Add the new value to existing values
        const currentValues = selectedObservation?.value || [];
        const newValues = [...currentValues, trimmedValue];
        updateSelectedObservation({ value: newValues });
        
        // Clear the input field
        setInputValue('');
      }
      ref.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Check if user is typing comma-separated values
    if (inputValue.includes(',')) {
      // Split on commas and trim whitespace
      const values = inputValue.split(',').map(v => v.trim()).filter(v => v.length > 0);
      updateSelectedObservation({ value: values });
      setInputValue(''); // Clear input after processing comma-separated values
    } else {
      // Just update the input value for single entry
      setInputValue(inputValue);
    }
  };

  return (
    <div
      tabIndex={-1}
      ref={ref}
      className="flex flex-col justify-center items-center mb-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Display existing tags */}
      {selectedObservation?.value && selectedObservation.value.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 w-full">
          {selectedObservation.value.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
            >
              <span>{value}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  const currentValues = selectedObservation.value || [];
                  const newValues = currentValues.filter((_, i) => i !== index);
                  updateSelectedObservation({ value: newValues });
                }}
                className="hover:bg-blue-200 rounded-full p-0.5"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Input field */}
      <input
        type="text"
        className="w-full h-12 bg-background-1 rounded-lg py-2 px-4 focus:outline-primary text-lg"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={editCellRef}
        placeholder="Type and press Enter to add tags, or use commas to separate multiple values..."
      />
    </div>
  );
};

export default CellEditArea;
