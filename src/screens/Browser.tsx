import { useEffect, useState } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { Pagination } from "../components/Pagination";
import { Character } from "../components/Character";
import { Navbar } from "../components/Navbar";
import { ListOfCharacters } from "../components/ListOfCharacters";
import { character } from "../interfaces/inCharacter";

export const Browser = () => {
  const [apiurl, setApiUrl] = useState<string>(
    "https://rickandmortyapi.com/api/character"
  );
  const { characters, info, loading, reload } = useGetCharacters(apiurl);
  const [searchResults, setSearchResults] = useState<character[]>([]);
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

  const handleSearch = (results: character[]) => {
    setSearchResults(results);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="bg-zinc-900 w-full grid h-full place-items-center">
        <h1>Personajes de la API</h1>
        {loading ? <p data-test-id="loading">Loading...</p> : null}
        <ListOfCharacters
          charactersToMap={
            searchResults.length > 0 ? searchResults : characters
          }
        />
        {searchResults.length > 0 ? (
          <div data-test-id="pagination" className="place-items-center my-5">
            <Pagination
              previous={""}
              next={""}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        ) : (
          <div data-test-id="pagination" className="place-items-center my-5">
            <Pagination
              previous={info?.prev}
              next={info?.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        )}
      </div>
    </>
  );
};
