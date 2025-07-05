import { useState } from "react";
import { AltrixAudio } from "../../AltrixDataModels";
import TranscriptView from "../transcript/TranscriptView";
import AudioListView from "./AudioListView";

export enum View {
  TRANSCRIPT = "transcript",
  AUDIO = "audio",
}

interface AudioAndTranscriptViewProps {
  audioList: AltrixAudio[];
}

const AudioAndTranscriptView = ({ audioList }: AudioAndTranscriptViewProps) => {
  const [view, setView] = useState<View>(View.AUDIO);
  const [selectedAudio, setSelectedAudio] = useState<AltrixAudio | null>(null);
  return (
    <div className="h-full mr-2">
      {view === View.TRANSCRIPT ? (
        <TranscriptView altrixAudio={selectedAudio} setView={setView} />
      ) : (
        <AudioListView
          audioList={audioList}
          setSelectedAudio={setSelectedAudio}
          setView={setView}
        />
      )}
    </div>
  );
};

export default AudioAndTranscriptView;
