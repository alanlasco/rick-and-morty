import React from "react";
import { render, screen } from "@testing-library/react";
import { Browser } from "../screens/Browser";

jest.mock("../hooks/useGetCharacters", () => ({
  useGetCharacters: jest.fn((url) => ({
    characters: [
      {
        id: 1,
        name: "Character 1",
        status: "Alive",
        species: "Human",
        image: "image1.jpg",
        type: "",
        gender: "Male",
      },
      {
        id: 2,
        name: "Character 2",
        status: "Dead",
        species: "Alien",
        image: "image2.jpg",
        type: "Dead alien",
        gender: "Male",
      },
    ],
    info: {
      prev: null,
      next: "https://rickandmortyapi.com/api/character?page=2",
    },
    loading: false,
    reload: jest.fn(),
  })),
}));

describe("Browser Component", () => {
  test("renders characters and pagination", () => {
    render(<Browser />);

    expect(screen.getByTestId("show-data")).toBeInTheDocument();

    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
