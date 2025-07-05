const AltrixScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-row justify-start">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default AltrixScreenWrapper;
