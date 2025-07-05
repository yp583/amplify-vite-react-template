import { Rule } from './rules';

// Sample test rules with actual boolean expressions
export const testRules: Rule[] = [
  {
    id: "UM IP R REASON FOR COMMUNICATION",
    label: "UM IP R REASON FOR COMMUNICATION", 
    condition: "",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM IP R PROVIDER NAME",
    label: "UM IP R PROVIDER NAME",
    condition: "(UM IP R REASON FOR COMMUNICATION = 'Critical lab value' OR UM IP R REASON FOR COMMUNICATION = 'Evaluate')",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM IP R PROVIDER ROLE",
    label: "UM IP R PROVIDER ROLE", 
    condition: "UM IP R PROVIDER NAME <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM IP R METHOD OF COMMUNICATION",
    label: "UM IP R METHOD OF COMMUNICATION",
    condition: "(UM IP R PROVIDER NAME <> '' AND UM IP R PROVIDER ROLE <> '')",
    jumpNextRow: "UM R IP/OR RESPONSE",
    doneWithGroup: false
  },
  {
    id: "UM R IP/OR RESPONSE", 
    label: "UM R IP/OR RESPONSE",
    condition: "UM IP R METHOD OF COMMUNICATION <> ''",
    jumpNextRow: "",
    doneWithGroup: true
  },
  // Additional rows with conditions
  {
    id: "UM ED R PATIENT HAND-OFF - REPORT GIVEN TO",
    label: "UM ED R PATIENT HAND-OFF - REPORT GIVEN TO",
    condition: "UM IP R REASON FOR COMMUNICATION = 'Patient request'",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PATIENT HAND-OFF REPORT RECEIVED FROM",
    label: "UM ED R PATIENT HAND-OFF REPORT RECEIVED FROM",
    condition: "UM ED R PATIENT HAND-OFF - REPORT GIVEN TO <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PATIENT HAND-OFF - HANDOFF COMPLETED AT BEDSIDE",
    label: "UM ED R PATIENT HAND-OFF - HANDOFF COMPLETED AT BEDSIDE",
    condition: "(UM ED R PATIENT HAND-OFF - REPORT GIVEN TO <> '' OR UM ED R PATIENT HAND-OFF REPORT RECEIVED FROM <> '')",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PATIENT HAND-OFF NOT COMPLETED - REASON",
    label: "UM ED R PATIENT HAND-OFF NOT COMPLETED - REASON",
    condition: "UM ED R PATIENT HAND-OFF - HANDOFF COMPLETED AT BEDSIDE = 'No'",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PATIENT HAND-OFF - PLAN OF CARE REVIEWED",
    label: "UM ED R PATIENT HAND-OFF - PLAN OF CARE REVIEWED",
    condition: "UM ED R PATIENT HAND-OFF - HANDOFF COMPLETED AT BEDSIDE <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PLAN OF CARE",
    label: "UM ED R PLAN OF CARE",
    condition: "UM ED R PATIENT HAND-OFF - PLAN OF CARE REVIEWED = 'Yes'",
    jumpNextRow: "",
    doneWithGroup: true
  },
  {
    id: "UM ED R PLAN OF CARE CONSULT SERVICE",
    label: "UM ED R PLAN OF CARE CONSULT SERVICE",
    condition: "UM ED R PLAN OF CARE <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PLAN OF CARE DIAGNOSTIC IMAGING",
    label: "UM ED R PLAN OF CARE DIAGNOSTIC IMAGING",
    condition: "UM ED R PLAN OF CARE <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PLAN OF CARE PROCEDURE",
    label: "UM ED R PLAN OF CARE PROCEDURE",
    condition: "(UM ED R PLAN OF CARE CONSULT SERVICE <> '' OR UM ED R PLAN OF CARE DIAGNOSTIC IMAGING <> '')",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PLAN OF CARE TEST RESULTS",
    label: "UM ED R PLAN OF CARE TEST RESULTS",
    condition: "UM ED R PLAN OF CARE PROCEDURE <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PLAN OF CARE COMMENT",
    label: "UM ED R PLAN OF CARE COMMENT",
    condition: "(UM ED R PLAN OF CARE TEST RESULTS <> '' OR UM ED R PLAN OF CARE <> '')",
    jumpNextRow: "",
    doneWithGroup: true
  },
  {
    id: "UM ED R PATIENT HAND-OFF - SAFETY CHECKS COMPLETED",
    label: "UM ED R PATIENT HAND-OFF - SAFETY CHECKS COMPLETED",
    condition: "UM ED R PATIENT HAND-OFF - HANDOFF COMPLETED AT BEDSIDE = 'Yes'",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM ED R PATIENT HAND-OFF - SAFETY CHECKS",
    label: "UM ED R PATIENT HAND-OFF - SAFETY CHECKS",
    condition: "UM ED R PATIENT HAND-OFF - SAFETY CHECKS COMPLETED = 'Yes'",
    jumpNextRow: "",
    doneWithGroup: true
  },
  {
    id: "UM ED R AES SEPSIS BUNDLE CARE REVIEWED",
    label: "UM ED R AES SEPSIS BUNDLE CARE REVIEWED",
    condition: "UM IP R REASON FOR COMMUNICATION = 'Critical lab value'",
    jumpNextRow: "",
    doneWithGroup: false
  },
  {
    id: "UM IP R  MUTUAL GOAL PATIENT SPECIFIC GOALS STAY",
    label: "UM IP R  MUTUAL GOAL PATIENT SPECIFIC GOALS STAY",
    condition: "UM ED R AES SEPSIS BUNDLE CARE REVIEWED <> ''",
    jumpNextRow: "",
    doneWithGroup: false
  }
]; 