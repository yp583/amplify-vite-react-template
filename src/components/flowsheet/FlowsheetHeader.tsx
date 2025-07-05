interface FlowsheetHeaderProps {
  name: string;
}

const FlowsheetHeader = ({ name }: FlowsheetHeaderProps) => {
  return (
    <div className="w-full h-fit-content flex flex-row justify-center p-6 bg-background-2 rounded-t-xl border-b-2 border-separator">
      <div className="font-primary text-flowsheet-header text-2xl font-bold">
        {name}
      </div>
    </div>
  );
};
export default FlowsheetHeader;
