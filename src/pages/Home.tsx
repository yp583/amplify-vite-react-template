import AltrixScreenWrapper from "../components/AltrixScreenWrapper";

const Home = () => {
  return (
    <AltrixScreenWrapper>
      <div className="border-2 border-green-500 w-full h-full flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl font-bold">AI Data Collection</h1>
        <p className="text-lg">Welcome to the AI Data Collection App.</p>
      </div>
    </AltrixScreenWrapper>
  );
};

export default Home;
