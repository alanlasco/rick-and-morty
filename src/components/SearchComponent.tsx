import { ChangeEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useFilterByCharacter } from "../hooks/useFilterByCharacter";
import { character } from "../interfaces/inCharacter";

export const SearchComponent = ({
  onSearch,
}: {
  onSearch: (results: character[]) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const searcher = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setErrorMessage(null);
  };
  const { results } = useFilterByCharacter(search);

  const handleSearch = () => {
    if (!search.trim()) {
      setErrorMessage("Campo vacío. Ingrese el nombre.");
      return;
    }

    const chars = results;
    onSearch(chars);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex">
          <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <span className="text-black">
              <IoSearchOutline className="w-5 h-5" />
            </span>
          </div>
          <input
            list="list"
            value={search}
            onChange={searcher}
            type="text"
            className="w-full max-w-[300px] bg-white pl-2 text-base font-semibold outline-0 pr-2"
            placeholder="Character name"
          />
          <datalist id="list">
            {results.map((element) => (
              <option key={element.id} value={element.name}></option>
            ))}
          </datalist>

          <button
            onClick={handleSearch}
            type="button"
            value="Search"
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-br-lg"
          >
            Search
          </button>
        </div>
      </div>
      {errorMessage && (
        <div className="flex items-center justify-center h-full mt-2">
          <p className="text-center text-red-500">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
