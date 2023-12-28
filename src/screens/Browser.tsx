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
      setErrorMessage(null);
    }
  };

  const onNext = () => {
    if (info && info.next) {
      setApiUrl(info.next);
      setErrorMessage(null);
    }
  };

  useEffect(() => {
    reload();
    setErrorMessage(null);
  }, [apiurl]);

  const handleSearch = (results: character[]) => {
    setSearchResults(results);

    if (results.length === 0) {
      setErrorMessage("Sorry, no results found for the entered name.");
    } else {
      setErrorMessage(null);
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
        {loading ? (
          <div>
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-emerald-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
            <p className="text-gray-700 mt-1" data-test-id="loading">
              Loading...
            </p>{" "}
          </div>
        ) : null}
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
            <p className="text-red-600 p-3">{errorMessage}</p>
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
