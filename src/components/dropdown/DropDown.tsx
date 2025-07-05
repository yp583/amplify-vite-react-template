import { useState, useRef } from "react";
import DropDownSelected from "./DropDownSelected";
import DropDownContent from "./DropDownContent";
import DropDownItem from "./DropDownItem";

interface DropDownProps {
  selectedContent: React.ReactNode;
  items: React.ReactNode[];
  onSelect?: (index: number) => void;
}

const DropDown = ({ selectedContent, items, onSelect }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <DropDownSelected 
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        selectedRef={selectedRef}
      >
        {selectedContent}
      </DropDownSelected>
      <div className="mt-2 flex flex-col">
        <DropDownContent selectedRef={selectedRef} isOpen={isOpen}>
          {isOpen && items.map((item, index) => (
            <DropDownItem key={index} onClick={() => {
              onSelect && onSelect(index);
              setIsOpen(false);
            }}>
              {item}
            </DropDownItem>
          ))}
        </DropDownContent>
      </div>
    </>
  );
};

export default DropDown; 