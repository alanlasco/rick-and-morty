import axios from "axios";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";

jest.mock("axios");

describe("useGetCharacters Hook", () => {
  test("should fetch characters and info", async () => {
    const mockData = {
      data: {
        results: [
          {
            id: 1,
            name: "Character 1",
            status: "Alive",
            species: "Human",
            image: "image1.jpg",
            type: "type1",
            gender: "gender2",
          },
          {
            id: 2,
            name: "Character 2",
            status: "Dead",
            species: "Alien",
            image: "image2.jpg",
            type: "type1",
            gender: "gender2",
          },
        ],
        info: {
          prev: null,
          next: "https://rickandmortyapi.com/api/character?page=2",
        },
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockData);

    let result: any;

    await act(async () => {
      result = renderHook(() =>
        useGetCharacters("https://rickandmortyapi.com/api/character")
      );
    });

    expect(result.result.current.characters).toEqual(mockData.data.results);
    expect(result.result.current.info).toEqual(mockData.data.info);
    expect(result.result.current.loading).toBeFalsy();
  });
});
