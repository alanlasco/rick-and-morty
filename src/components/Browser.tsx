import React, { useEffect, useState } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { Pagination } from "./Pagination";

export const Browser = () => {
  const [apiurl, setApiUrl] = useState<string>(
    "https://rickandmortyapi.com/api/character"
  );
  const { characters, info, loading, error, reload } = useGetCharacters(apiurl);

  const onPrevious = () => {
    if (info && info.prev) {
      console.log("se hizo click");
      setApiUrl(info.prev);
    }
  };

  const onNext = () => {
    console.log("se hizo click");
    if (info && info.next) {
      console.log(info.prev);
      setApiUrl(info.next);
    }
  };
  useEffect(() => {
    reload();
  }, [apiurl]);

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
      <Pagination
        previous={info?.prev}
        next={info?.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};
