import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";

export const Browser = () => {
  const apiurl: string = "https://rickandmortyapi.com/api/character";
  const { characters, info, loading, error } = useGetCharacters(apiurl);

  return (
    <div>
      <h1>Personajes de la API</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      <ul>
        {characters.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};
