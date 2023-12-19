import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "../components/Pagination";

const mockOnPrevious = jest.fn();
const mockOnNext = jest.fn();

test("Pagination renders successfully", () => {
  render(
    <Pagination
      previous="url-previous"
      next="url-next"
      onPrevious={mockOnPrevious}
      onNext={mockOnNext}
    />
  );
  const paginationElement = screen.getByTestId("pagination-component");
  expect(paginationElement).toBeInTheDocument();

  const nextButton = screen.getByRole("button", { name: /Next/i });
  expect(nextButton).toBeInTheDocument();

  const previousButton = screen.getByRole("button", { name: /Previous/i });
  expect(previousButton).toBeInTheDocument();
});

test("Next button is disabled when 'next' prop is undefined", () => {
  render(
    <Pagination
      previous="url-previous"
      next={undefined}
      onPrevious={mockOnPrevious}
      onNext={mockOnNext}
    />
  );
  const previousButton = screen.getByRole("button", { name: /Previous/i });
  const nextButton = screen.getByRole("button", { name: /Next/i });
  expect(nextButton).toHaveClass("disabled:pointer-events-none");
  fireEvent.click(previousButton);
  expect(mockOnPrevious).toHaveBeenCalled();
});

test("Previous button is disabled when 'previous' prop is undefined", () => {
  render(
    <Pagination
      previous={undefined}
      next="url-next"
      onPrevious={mockOnPrevious}
      onNext={mockOnNext}
    />
  );
  const nextButton = screen.getByRole("button", { name: /Next/i });
  const previousButton = screen.getByRole("button", { name: /Previous/i });
  expect(previousButton).toHaveClass("disabled:pointer-events-none");
  fireEvent.click(nextButton);
  expect(mockOnNext).toHaveBeenCalled();
});
