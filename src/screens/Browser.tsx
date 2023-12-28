import { useEffect, useState } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import { Pagination } from "../components/Pagination";
import { Navbar } from "../components/Navbar";
import { ListOfCharacters } from "../components/ListOfCharacters";
import { character } from "../interfaces/inCharacter";
import { BtnReload } from "../components/BtnReload";

export const Browser = () => {
  const [apiurl, setApiUrl] = useState<string>(
    "https://rickandmortyapi.com/api/character"
  );
  const { characters, info, loading, reload } = useGetCharacters(apiurl);
  const [searchResults, setSearchResults] = useState<character[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [needReload, setNeedReload] = useState<boolean>(false);

  const onPrevious = () => {
    if (info && info.prev) {
      setApiUrl(info.prev);
      setErrorMessage(null); // Limpiar el mensaje de error al cambiar de página
    }
  };

  const onNext = () => {
    if (info && info.next) {
      setApiUrl(info.next);
      setErrorMessage(null);
      console.log(info.next); // Limpiar el mensaje de error al cambiar de página
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
    setNeedReload(true);
  };

  const isHidden = () => {
    return searchResults.length > 0 || errorMessage
      ? "hidden"
      : "bg-zinc-900 w-full h-full";
  };

  const handleReload = () => {
    setErrorMessage(null);
    setSearchResults([]);
    setNeedReload(false);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className=" bg-zinc-900 w-full grid place-items-center min-h-screen pt-4">
        {loading ? <p data-test-id="loading">Loading...</p> : null}
        <div className={isHidden()}>
          <ListOfCharacters charactersToMap={characters} />
        </div>
        {errorMessage ? (
          <div className="flex flex-col items-center bg-zinc-900">
            <img
              className="w-1/2 max-w-lg h-auto md:w-1/2 sm:w-2/3 rounded-full filter grayscale "
              src={require(`../images/notFoundIcon.png`)}
              alt=""
            />
            <p className="text-red-600 p-">{errorMessage}</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className=" bg-zinc-900 w-full h-full">
            <ListOfCharacters charactersToMap={searchResults} />
          </div>
        ) : null}
        {needReload || errorMessage ? (
          <BtnReload reload={handleReload} />
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
