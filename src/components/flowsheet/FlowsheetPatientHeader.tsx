interface FlowsheetPatientHeaderProps {
  first: string;
  last: string;
}

const FlowsheetPatientHeader = ({
  first,
  last,
}: FlowsheetPatientHeaderProps) => {
  return (
    <div className="w-full h-fit-content flex flex-row justify-center p-6 bg-background-2 rounded-t-xl border-b-2 border-separator">
      <div className="font-primary text-flowsheet-header text-2xl font-semibold">
        {last}, {first}
      </div>
    </div>
  );
};
export default FlowsheetPatientHeader;
