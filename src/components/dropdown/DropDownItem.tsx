interface DropDownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const DropDownItem = ({ children, onClick }: DropDownItemProps) => {
  return (
    <div 
      className="flex flex-col relative w-full h-full bg-transparent cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropDownItem;