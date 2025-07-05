import { Patient } from "../AltrixDataModels";

export const examplePatientList: Patient[] = [
  {
    id: "patient-1",
    first: "Jane",
    last: "Doe",
    dob: new Date("1990-01-01"),
  },
  {
    id: "patient-2",
    first: "John",
    last: "Smith",
    dob: new Date("1985-05-15"),
  },
  {
    id: "patient-3",
    first: "Alice",
    last: "Johnson",
    dob: new Date("1975-03-25"),
  },
  {
    id: "patient-4",
    first: "Bob",
    last: "Taylor",
    dob: new Date("2000-07-10"),
  },
];
