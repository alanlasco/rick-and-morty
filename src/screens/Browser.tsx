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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onPrevious = () => {
    if (info && info.prev) {
      setApiUrl(info.prev);
      setErrorMessage(null); // Limpiar el mensaje de error al cambiar de página
    }
  };

  const onNext = () => {
    if (info && info.next) {
      setApiUrl(info.next);
      setErrorMessage(null); // Limpiar el mensaje de error al cambiar de página
    }
  };

  useEffect(() => {
    reload();
    setErrorMessage(null); // Limpiar el mensaje de error al cargar nuevos personajes
  }, [apiurl]);

  const handleSearch = (results: character[]) => {
    setSearchResults(results);

    if (results.length === 0) {
      setErrorMessage("No se encontraron personajes.");
    } else {
      setErrorMessage(null); // Limpiar el mensaje de error si se encontraron resultados
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="bg-zinc-900 w-full grid h-full place-items-center">
        <h1>Personajes de la API</h1>
        {loading ? <p data-test-id="loading">Loading...</p> : null}
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <ListOfCharacters
            charactersToMap={
              searchResults.length > 0 ? searchResults : characters
            }
          />
        )}
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
