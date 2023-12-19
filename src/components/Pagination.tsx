import React from "react";
import { PaginationProps } from "../interfaces/InPaginationProps";

export const Pagination = (props: PaginationProps) => {
  return (
    <div data-testid="pagination-component" className="flex container">
      {props.previous ? (
        <button
          onClick={() => props.onPrevious()}
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
      {props.next ? (
        <button
          onClick={() => props.onNext()}
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
