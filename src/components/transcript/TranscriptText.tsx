import { useEffect, useRef, useMemo } from "react";
import { TranscriptSegment } from "../../AltrixDataModels";
import Fuse from "fuse.js";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";

interface TranscriptTextProps {
  segments: TranscriptSegment[];
  query: string;
  setSearchResults: (results: TranscriptSegment[]) => void;
  searchIndex: number;
}

const TranscriptText = ({
  segments,
  query,
  setSearchResults,
  searchIndex,
}: TranscriptTextProps) => {
  const { seek, currentTime } = useAudioPlayer();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const segmentRefs = useRef<Map<number, HTMLSpanElement | null>>(new Map());

  const fuse = new Fuse(segments, {
    keys: ["word"],
    includeMatches: true,
    threshold: 0.1,
  });

  const searchResults = useMemo(() => {
    return fuse
      .search(query)
      .map((result: any) => result.item)
      .sort((a, b) => a.start - b.start);
  }, [query, segments]);

  const activeSegment = segments.find(
    (segment) => currentTime >= segment.start && currentTime < segment.end,
  );

  useEffect(() => {
    setSearchResults(searchResults);
  }, [searchResults]);

  useEffect(() => {
    const results = fuse.search(query).map((result: any) => result.item);
    if (results.length > 0) {
      const sortedResults = results.sort((a, b) => a.start - b.start);
      setSearchResults(sortedResults);
    } else {
      setSearchResults([]);
    }
  }, [query, segments]);

  useEffect(() => {
    if (activeSegment) {
      const activeRef = segmentRefs.current.get(activeSegment.id);
      if (activeRef) {
        activeRef.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currentTime]);

  useEffect(() => {
    if (searchResults.length > 0 && searchIndex >= 0) {
      const activeRef = segmentRefs.current.get(searchResults[searchIndex].id);
      if (activeRef) {
        activeRef.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [searchIndex, searchResults]);

  return (
    <div ref={containerRef} className="max-h-110 text-dark-text">
      {segments.length === 0 ? (
        <p className="text-grey-text">No transcript available.</p>
      ) : (
        segments.map((segment: TranscriptSegment) => {
          const isSearchMatch = searchResults.some(
            (result) => result.id === segment.id,
          );

          const isActiveMatch =
            searchResults.length > 0 &&
            searchIndex >= 0 &&
            searchIndex < searchResults.length &&
            segment.id === searchResults[searchIndex].id;

          const isCurrentSegment = segment.id === activeSegment?.id;
          return (
            <span
              key={segment.id}
              ref={(el) => {
                if (el) segmentRefs.current.set(segment.id, el);
              }}
              onClick={() => seek(segment.start)}
              className={`cursor-pointer rounded-md p-[2px] text-base ${
                isSearchMatch ? "bg-primary-light" : ""
              } ${isActiveMatch ? "border-2 border-primary" : ""}
                ${isCurrentSegment ? "font-bold text-primary text-[15px]" : ""}
              `}
            >
              {segment.word}{" "}
            </span>
          );
        })
      )}
    </div>
  );
};

export default TranscriptText;
