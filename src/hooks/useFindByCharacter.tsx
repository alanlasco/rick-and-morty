import React from "react";
import { useGetCharacters } from "./useGetCharacters";

export const useFindByCharacter = (name: string) => {
  const apiurl = "https://rickandmortyapi.com/api/character";

  const { characters } = useGetCharacters(apiurl);

  console.log("Name:", name);
  console.log("Characters:", characters);

  const result =
    name !== ""
      ? characters.find((data) =>
          data.name.toLowerCase().includes(name.toLowerCase())
        )
      : undefined;

  console.log("Result:", result);

  return {
    result,
  };
};
