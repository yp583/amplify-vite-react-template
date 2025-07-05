import { AudioPlayerProvider } from "../../hooks/useAudioPlayer";
import AudioPlayer from "./AudioPlayer";
import { AltrixAudio } from "../../AltrixDataModels";
import { View } from "./AudioAndTranscriptView";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";

interface AudioListViewProps {
  audioList: AltrixAudio[];
  setView: (view: View) => void;
  setSelectedAudio: (audio: AltrixAudio) => void;
}

const AudioListView = ({
  audioList,
  setView,
  setSelectedAudio,
}: AudioListViewProps) => {
  const DraggableAudioItem = ({ audio }: { audio: AltrixAudio }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
      useDraggable({
        id: audio.id.toString(),
      });

    const [showOutline, setShowOutline] = useState(false);

    // Use inline styles for the outline instead of Tailwind classes
    const outlineStyle = showOutline
      ? {
        outline: "3px solid var(--color-primary)",
        borderRadius: "1rem",
      }
      : {};

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      if (isDragging) {
        timeout = setTimeout(() => {
          setShowOutline(true);
        }, 100);
      } else {
        setShowOutline(false);
      }

      return () => clearTimeout(timeout);
    }, [isDragging]);

    return (
      <div
        ref={setNodeRef}
        style={{
          ...outlineStyle,
          ...(transform
            ? { transform: CSS.Translate.toString(transform) }
            : {}),
        }}
        {...listeners}
        {...attributes}
        className="mb-4" //the last word
      >
        <div
          className="flex flex-col py-2 bg-background-1 rounded-2xl cursor-pointer"
          onDoubleClick={(e) => {
            e.stopPropagation();
            setView(View.TRANSCRIPT);
            setSelectedAudio(audio);
          }}
        >
          <div className="flex flex-row px-4 mt-1 justify-between items-center">
            <p>
              {audio.createdAt.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setView(View.TRANSCRIPT);
                setSelectedAudio(audio);
              }}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="cursor-pointer">
            <AudioPlayerProvider src={audio.s3_key}>
              <AudioPlayer />
            </AudioPlayerProvider>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full bg-background-2 p-6 rounded-2xl">
      <div className="flex w-full justify-center items-center mb-6">
        <p className="font-inter text-2xl font-medium text-dark-text">Audio</p>
      </div>
      {audioList.map((altrixAudio: AltrixAudio, idx: number) => (
        <DraggableAudioItem
          key={altrixAudio.id ? altrixAudio.id.toString() : idx.toString()}
          audio={altrixAudio}
        />
      ))}
    </div>
  );
};

export default AudioListView;
