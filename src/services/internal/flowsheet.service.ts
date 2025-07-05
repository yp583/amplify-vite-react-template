import { exampleFlowsheetConfig, exampleFlowsheetConfig2 } from "../../testData/flowsheetConfig";

import exampleFlowsheets from "../../testData/flowsheets";

//return a specific flowsheet for a patient
export const getPatientFlowsheet = (_patientId: string, _flowsheetId: string) => {
  return JSON.parse(JSON.stringify(exampleFlowsheets));
};

export const getSupportedFlowsheetConfigs = () => {
  return [JSON.parse(JSON.stringify(exampleFlowsheetConfig)), JSON.parse(JSON.stringify(exampleFlowsheetConfig2))];
};

