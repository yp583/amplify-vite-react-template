import { CollapsibleConfig } from "../AltrixDataModels";

export const exampleCollapsibleInfo: CollapsibleConfig = {
  config: {
    "8867-4": ["8480-6", "9279-1"], // Heart Rate -> Blood Pressure, Respiratory Rate
    "8480-6": ["9279-1"], // Blood Pressure -> Respiratory Rate
    "9279-1": [], // Respiratory Rate
  },
};