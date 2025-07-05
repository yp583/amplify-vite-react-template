import SearchBar from "./SearchBar";
import AudioPlayer from "../audio/AudioPlayer";
import { AltrixAudio, TranscriptSegment } from "../../AltrixDataModels";
import TranscriptText from "./TranscriptText.tsx";

import { useState } from "react";
import { AudioPlayerProvider } from "../../hooks/useAudioPlayer.tsx";
import { View } from "../audio/AudioAndTranscriptView.tsx";

interface TranscriptViewProps {
  altrixAudio: AltrixAudio | null;
  setView: (view: View) => void;
}

const TranscriptView = ({ altrixAudio, setView: _setView }: TranscriptViewProps) => {
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<TranscriptSegment[]>([]);

  const [signedUrl, _setSignedUrl] = useState<string>(altrixAudio?.s3_key ?? "");
  const [_loading, _setLoading] = useState(true);
  const [_error, _setError] = useState<string | null>(null);

  return (
    <AudioPlayerProvider src={signedUrl}>
      <div
        className={`flex flex-col w-full h-full bg-background-2 p-6 rounded-2xl`}
      >
        <div className="relative flex w-full h-5 mb-8 items-center justify-center">
          <p className="font-inter text-2xl font-medium justify-self-center text-dark-text">
            Transcript
          </p>
        </div>
        <div className="flex justify-between items-center mb-4 text-grey-text font-medium font-inter text-base">
          <p>{altrixAudio?.transcriptName}</p>
          <p>
            {altrixAudio?.createdAt.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
        <div className="flex mb-4 items-center justify-center">
          <SearchBar
            query={query}
            setQuery={setQuery}
            searchResults={searchResults}
            searchIndex={searchIndex}
            setSearchIndex={setSearchIndex}
          />
        </div>
        <div className="flex mb-4 items-center justify-center">
          <AudioPlayer />
        </div>
        <div className="h-[calc(100%)] items-center justify-center overflow-y-auto">
          <TranscriptText
            segments={altrixAudio?.transcript ?? []}
            query={query}
            searchIndex={searchIndex}
            setSearchResults={setSearchResults}
          />
        </div>
      </div>
    </AudioPlayerProvider>
  );
};

export default TranscriptView;
