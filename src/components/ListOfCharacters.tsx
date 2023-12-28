import React from "react";
import { character } from "../interfaces/inCharacter";
import { Character } from "./Character";

export const ListOfCharacters = ({
  charactersToMap,
}: {
  charactersToMap: character[];
}) => {
  return (
    <>
      {charactersToMap.length > 1 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
          {charactersToMap.map((element) => (
            <li className="mx-2 my-5" key={element.id}>
              <Character
                name={element.name}
                status={element.status}
                species={element.species}
                image={element.image}
                type={element.type}
                gender={element.gender}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex justify-center items-center">
          {charactersToMap.map((element) => (
            <li className="mx-2 my-5" key={element.id}>
              <Character
                name={element.name}
                status={element.status}
                species={element.species}
                image={element.image}
                type={element.type}
                gender={element.gender}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
