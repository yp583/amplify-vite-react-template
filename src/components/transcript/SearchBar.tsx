import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import {} from "@heroicons/react/24/outline";
import { TranscriptSegment } from "../../AltrixDataModels";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  searchIndex: number;
  setSearchIndex: (value: number | ((prev: number) => number)) => void;
  searchResults: TranscriptSegment[];
}

const SearchBar = ({
  query,
  setQuery,
  setSearchIndex,
  searchResults,
}: SearchBarProps) => {
  const onNext = () => {
    console.log(searchResults);
    if (searchResults.length > 0) {
      setSearchIndex(
        (prevIndex: number) => (prevIndex + 1) % searchResults.length,
      );
    }
  };

  const onPrev = () => {
    if (searchResults.length > 0) {
      setSearchIndex(
        (prevIndex: number) =>
          (prevIndex - 1 + searchResults.length) % searchResults.length,
      );
    }
  };

  return (
    <div className="flex flex-row py-2 w-full px-4 bg-background-1 rounded-full items-center">
      <MagnifyingGlassIcon
        className="flex h-5 w-5 mr-5 stroke-dark-text"
        strokeWidth={2}
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search transcript"
        className="flex h-full w-full outline-none"
      />
      <div className="flex items-center space-x-2 ml-auto">
        <button onClick={onPrev}>
          <ChevronUpIcon className="h-5 w-5" />
        </button>
        <button onClick={onNext}>
          <ChevronDownIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
