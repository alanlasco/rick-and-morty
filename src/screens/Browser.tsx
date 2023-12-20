import React, { useEffect, useState } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { Pagination } from "../components/Pagination";
import { Character } from "../components/Character";

export const Browser = () => {
  const [apiurl, setApiUrl] = useState<string>(
    "https://rickandmortyapi.com/api/character"
  );
  const { characters, info, loading, error, reload } = useGetCharacters(apiurl);

  const onPrevious = () => {
    if (info && info.prev) {
      setApiUrl(info.prev);
    }
  };

  const onNext = () => {
    if (info && info.next) {
      console.log(info.prev);
      setApiUrl(info.next);
    }
  };
  useEffect(() => {
    reload();
  }, [apiurl]);

  return (
    <div className="bg-zinc-900 w-full grid h-full place-items-center">
      <h1>Personajes de la API</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
        {characters.map((element) => (
          <li className="mx-2 my-5" key={element.id}>
            <Character
              name={element.name}
              status={element.status}
              species={element.species}
              image={element.image}
            />
          </li>
        ))}
      </ul>
      <div className="place-items-center my-5">
        <Pagination
          previous={info?.prev}
          next={info?.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
};
