import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "../components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

test("Home renders successfully", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const homeElement = screen.getByTestId("home-component");
  expect(homeElement).toBeInTheDocument();

  const exploreLink = screen.getByText(/Explore/i);
  expect(exploreLink).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Explore/i));

  const expectedPath = "/browser";
  expect(window.location.pathname).toBe(expectedPath);
});
