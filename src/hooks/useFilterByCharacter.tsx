import { useGetCharacters } from "./useGetCharacters";

export const useFilterByCharacter = (name: string) => {
  const apiurl = "https://rickandmortyapi.com/api/character";

  const { characters } = useGetCharacters(apiurl);

  const results = !name
    ? characters
    : characters.filter((data) =>
        data.name.toLowerCase().includes(name.toLowerCase())
      );

  return {
    results,
  };
};
