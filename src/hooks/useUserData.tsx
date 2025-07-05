import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
//TODO: Replace with empty values again once we have a real backend
export interface UserDataContextModel {
  firstName: string;
  setFirstName: (_firstName: string) => void;
  lastName: string;
  setLastName: (_lastName: string) => void;
  position: string;
  setPosition: (_position: string) => void;
  hospital: string;
  setHospital: (_hospital: string) => void;
  unit: string;
  setUnit: (_unit: string) => void;
  providerID: string;
  setProviderID: (_providerID: string) => void;
  patientIDTodos: string[];
  setPatientIDTodos: (_patientIDTodos: string[]) => void;

}

const UserDataContext = createContext<UserDataContextModel>({
  firstName: "Test",
  setFirstName: (_firstName: string) => {},
  lastName: "Alexander",
  setLastName: (_lastName: string) => {},
  position: "R.N.",
  setPosition: (_position: string) => {},
  hospital: "Hospital",
  setHospital: (_hospital: string) => {},
  unit: "Unit 6B",
  setUnit: (_unit: string) => {},
  providerID: "1234567890",
  setProviderID: (_providerID: string) => {},
  patientIDTodos: ["1234567890", "1234567890"],
  setPatientIDTodos: (_patientIDTodos: string[]) => {},
});

const UserDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [firstName, setFirstName] = useState<string>("Test");
  const [lastName, setLastName] = useState<string>("Alexander");
  const [position, setPosition] = useState<string>("R.N.");
  const [providerID, setProviderID] = useState<string>("1234567890");
  const [patientIDTodos, setPatientIDTodos] = useState<string[]>(["1234567890", "1234567890"]);
  const [hospital, setHospital] = useState<string>("University of Michigan");
  const [unit, setUnit] = useState<string>("Unit 6B");

  const value: UserDataContextModel = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    position,
    setPosition,
    hospital,
    setHospital,
    unit,
    setUnit,
    providerID,
    setProviderID,
    patientIDTodos,
    setPatientIDTodos,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

function useUserData() {
  return useContext(UserDataContext);
}

export { UserDataProvider, useUserData };


