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
      },
      {
        id: 2,
        name: "Character 2",
        status: "Dead",
        species: "Alien",
        image: "image2.jpg",
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
    // Renderiza el componente
    render(<Browser />);

    // Verifica que los personajes se rendericen correctamente
    expect(screen.getByTestId("show-data")).toBeInTheDocument();

    // Verifica que la paginación se renderice correctamente
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
