import React, { useState, useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SmallCard } from "./SmallCard";

export const Team = () => {
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState<boolean>(false);
  const { teamState, reset } = useContext(TeamContext);

  const toggleTeanMenu = () => {
    setIsTeamMenuOpen(!isTeamMenuOpen);
  };
  const handleDisabled = () => {
    return teamState.teamCount === 0 ? true : false;
  };
  const members = teamState?.members ?? [];
  return (
    <>
      <nav className="flex items-center relative w-75 flex-col justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 mb-2">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
            {members.map((member) => (
              <li key={member.id} className="mx-2 my-2">
                <SmallCard img={member.image} name={member.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-left text-white text-sm">
            {teamState.teamCount === 0
              ? "There are not any members on your team."
              : ""}
          </h4>
        </div>

        <div>
          <button
            onClick={() => reset()}
            disabled={handleDisabled()}
            className={`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white ${
              handleDisabled()
                ? ""
                : "hover:bg-white hover:border-transparent hover:text-teal-500"
            } mt-4 lg:mt-0`}
          >
            Reset
          </button>
        </div>
      </nav>
    </>
  );
};
