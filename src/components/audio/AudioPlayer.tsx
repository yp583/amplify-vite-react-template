import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const AudioPlayer = () => {
  const { play, pause, seek, duration, currentTime, isPlaying } =
    useAudioPlayer();

  const togglePlay = () => {
    console.log("hello");
    isPlaying ? pause() : play();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    seek(newTime);
  };

  return (
    <div className="flex items-center w-full px-4 py-2 rounded-full bg-background-1">
      <button
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        className="mr-4"
      >
        {isPlaying ? (
          <PauseIcon className="h-5 w-5 text-primary" />
        ) : (
          <PlayIcon className="h-5 w-5 text-primary" />
        )}
      </button>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onPointerDown={(e) => e.stopPropagation()}
        onChange={handleSeek}
        className="flex-1 h-2 rounded-full range-primary-light accent-primary"
      />

      <span className="text-xs text-grey-text truncate max-w-full ml-4">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
};

export default AudioPlayer;
