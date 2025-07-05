import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
} from "react";

interface AudioPlayerContextState {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTime: number;
  isPlaying: boolean;
  duration: number;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextState | null>(null);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider",
    );
  }
  return context;
};

interface AudioPlayerProviderProps {
  src: string;
  children: React.ReactNode;
}

export const AudioPlayerProvider = ({
  src,
  children,
}: AudioPlayerProviderProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play error:", err));
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        audioRef,
        currentTime,
        isPlaying,
        duration,
        play,
        pause,
        seek,
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />
      {children}
    </AudioPlayerContext.Provider>
  );
};
