import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { FlowsheetConfig, Patient } from "../AltrixDataModels";
import { examplePatientList } from "../testData/patient";
import { getSupportedFlowsheetConfigs } from "../services/internal/flowsheet.service";

export interface AppDataContextModel {
  navBarOpen: boolean;
  setNavBarOpen: (_navBarOpen: boolean) => void;

  selectedPages: { [key: string]: boolean };
  setSelectedPages: (_selectedPages: { [key: string]: boolean }) => void;

  patients: Patient[];
  setPatients: (_patients: Patient[]) => void;

  selectedPatient: Patient;
  setSelectedPatient: (patient: Patient) => void;

  selectedFlowsheetConfigId: Record<string, string>; //patientId -> flowsheetConfigId
  setSelectedFlowsheetConfigId: (id: string) => void;

  supportedFlowsheetConfigs: FlowsheetConfig[];
  setSupportedFlowsheetConfigs: (configs: FlowsheetConfig[]) => void;

  getSelectedFlowsheetConfig: () => FlowsheetConfig | null;
}

const AppDataContext = createContext<AppDataContextModel>({
  navBarOpen: true,
  setNavBarOpen: () => {},

  selectedPages: {},
  setSelectedPages: () => {},

  patients: [],
  setPatients: () => {},

  selectedPatient: examplePatientList[0],
  setSelectedPatient: () => {},

  selectedFlowsheetConfigId: {},
  setSelectedFlowsheetConfigId: () => {},

  supportedFlowsheetConfigs: [],
  setSupportedFlowsheetConfigs: () => {},

  getSelectedFlowsheetConfig: () => null,
});

const AppDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(true);
  const [selectedPages, setSelectedPages] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedPatient, setSelectedPatient] = useState<Patient>(examplePatientList[0]);
  const [selectedFlowsheetConfigId, _setSelectedFlowsheetConfigId] = useState<Record<string, string>>({});

  const [patients, setPatients] = useState<Patient[]>(examplePatientList);

  const [supportedFlowsheetConfigs, setSupportedFlowsheetConfigs] = useState<FlowsheetConfig[]>(getSupportedFlowsheetConfigs());

  const getSelectedFlowsheetConfig = useCallback(() => {
    return supportedFlowsheetConfigs.find((config) => config.id === selectedFlowsheetConfigId[selectedPatient.id]) ?? supportedFlowsheetConfigs[0];
  }, [supportedFlowsheetConfigs, selectedFlowsheetConfigId, selectedPatient]);

  const setSelectedFlowsheetConfigId = useCallback((id: string) => {
    _setSelectedFlowsheetConfigId((prev) => ({ ...prev, [selectedPatient.id]: id }));
  }, [selectedFlowsheetConfigId, selectedPatient]);

  const value: AppDataContextModel = {
    navBarOpen,
    setNavBarOpen,

    selectedPages,
    setSelectedPages,

    patients,
    setPatients,

    selectedPatient,
    setSelectedPatient,

    selectedFlowsheetConfigId,
    setSelectedFlowsheetConfigId,

    supportedFlowsheetConfigs,
    setSupportedFlowsheetConfigs,

    getSelectedFlowsheetConfig,

  };

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};

function useAppData() {
  return useContext(AppDataContext);
}

export { AppDataProvider, useAppData };
