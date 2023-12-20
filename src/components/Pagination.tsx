interface paginationProps {
  previous: string | undefined;
  next: string | undefined;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination = ({
  previous,
  next,
  onPrevious,
  onNext,
}: paginationProps) => {
  return (
    <div data-testid="pagination-component" className="flex container">
      {previous ? (
        <button
          onClick={() => onPrevious()}
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
        >
          <div className="flex items-center">{"< "} Previous</div>
        </button>
      ) : (
        <button
          disabled
          className="disabled:pointer-events-none bg-green-100  text-gray-400 font-bold py-2 px-6 rounded-full"
        >
          <div className="flex items-center"> {"< "}Previous</div>
        </button>
      )}
      {next ? (
        <button
          onClick={() => onNext()}
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
        >
          <div className="flex items-center">Next {" >"}</div>
        </button>
      ) : (
        <button
          disabled
          className="disabled:pointer-events-none bg-green-100  text-gray-400 font-bold py-2 px-6 rounded-full"
        >
          <div className="flex items-center">Next {" >"}</div>
        </button>
      )}
    </div>
  );
};
