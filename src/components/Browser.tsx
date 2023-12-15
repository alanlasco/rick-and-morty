import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";

export const Browser = () => {
  const apiurl: string = "https://rickandmortyapi.com/api/character";
  const { characters, info, loading, error } = useGetCharacters(apiurl);

  return (
    <div>
      <h1>Personajes de la API</h1>
      <ul>
        {characters.map((elemento) => (
          <li key={elemento.id}>{elemento.name}</li>
        ))}
      </ul>
    </div>
  );
};
