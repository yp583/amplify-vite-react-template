interface DropDownContentProps {
  children: React.ReactNode;
  selectedRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}

const DropDownContent = ({ children, selectedRef, isOpen }: DropDownContentProps) => {

  return (
    <div 
      className={`absolute flex flex-col bg-transparent rounded-lg overflow-hidden ${isOpen ? "outline-2 outline-primary" : ""}`}
      style={{ width: `${selectedRef?.current?.clientWidth}px` }}
    >
      {children}
    </div>
  );
};

export default DropDownContent;
