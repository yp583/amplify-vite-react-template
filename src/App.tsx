import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/* import Flowsheets from "./pages/Flowsheets"; */
import { UserDataProvider } from "./hooks/useUserData";
import { AppDataProvider } from "./hooks/useAppData";
import Flowsheets from "./pages/Flowsheets";
import AdultPCSFlowsheet from "./components/AdultPCSFlowsheet";

const App = () => {
  return (
    <AppDataProvider>
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/adult-pcs" replace />} />
            <Route path="/flowsheets" element={<Flowsheets />} />
            <Route path="/adult-pcs" element={<AdultPCSFlowsheet />} />
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </AppDataProvider>
  );
};

export default App;
