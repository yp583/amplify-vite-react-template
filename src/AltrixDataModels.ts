export interface NavPage {
  name: string;
  onNavigate: () => void;
  icon: React.ReactNode;
  subPages?: NavPage[];
}

export interface TranscriptSegment {
  id: number;
  word: string;
  start: number;
  end: number;
}

export interface Patient {
  id: string;
  first: string;
  last: string;
  dob: Date;
}

export interface AltrixAudio {
  id: number;
  patientID: string;
  s3_key: string;
  transcript: TranscriptSegment[];
  transcriptName: string;
  createdAt: Date;
}

/* Flowsheet Data Models */
export interface Flowsheet {
  id: string;
  configId: string;
  flowsheetInstances: FlowsheetInstance[]; //in order of appearance in the flowsheet
}

export interface FlowsheetInstance {
  id: string;
  dateTime: string;
  groups: Group[]; //in order of appearance in the flowsheet
}

export interface Group {
  id: string;
  name: string;
  observations: Observation[]; //in order of appearance in flowsheet
}

export interface Observation {
  id: string;
  code: string;
  displayName: string;
  dateTime: string;
  value: string[];
  patientId: string;
  comments?: string;
  choices?: string[];
  units?: string;
}

export interface SelectedObservationPath {
  flowsheetInstanceIndex: number;
  groupIndex: number;
  observationIndex: number;
}

export interface Patient {
  id: string;
  first: string;
  last: string;
  dob: Date;
}

export interface CollapsedRows {
  collapsed: Record<string, boolean>; // observation id -> collapsed state
}

export interface CollapsibleConfig {
  config: Record<string, string[]>; // key: observation code, value: array of connected observation codes that should be collapsed
}

export interface FlowsheetConfig {
  id: string;
  name: string;
  collapsibleConfig: CollapsibleConfig;
}
