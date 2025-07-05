import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DropDownSelectedProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  selectedRef: React.RefObject<HTMLDivElement | null>;
}

const DropDownSelected = ({ children, isOpen, onClick, selectedRef }: DropDownSelectedProps) => {
  return (
    <div 
      className={`w-full h-8 bg-background-1 rounded-lg px-2 flex items-center justify-between ${isOpen ? 'outline-2 outline-primary' : 'm-b-8'}`} 
      onClick={onClick} 
      ref={selectedRef}
    >
      {children}
      <ChevronDownIcon className="h-5 w-5"/>
    </div>
  );
};

export default DropDownSelected;
