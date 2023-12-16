import React from "react";
import { PaginationProps } from "../interfaces/InPaginationProps";

export const Pagination = (props: PaginationProps) => {
  return (
    <div className="flex container">
      {props.previous ? (
        <button onClick={() => props.onPrevious()}>Previous</button>
      ) : null}
      {props.next ? <button onClick={() => props.onNext()}>Next</button> : null}
    </div>
  );
};
