import React, { useState, useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import { MdDriveFileRenameOutline } from "react-icons/md";

export const Team = () => {
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState<boolean>(false);
  const { teamState, reset } = useContext(TeamContext);

  const toggleTeanMenu = () => {
    setIsTeamMenuOpen(!isTeamMenuOpen);
  };
  const members = teamState?.members ?? [];
  return (
    <>
      <nav className="flex items-center relative w-75 flex-col justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 mb-2">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
            {members.map((member) => (
              <li key={member.idem} className="mx-2 my-2">
                <div className="w-full mx-4 p-4 bg-gray-600 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    alt="Card Image"
                    src={member.img}
                  />
                  <div className=" items-center mb-2 flex font-sans text-xl font-semibold leading-relaxed text-inherit antialiase">
                    <p className="text-emerald-400">{member.name}</p>
                    <span className="text-emerald-400">
                      <MdDriveFileRenameOutline />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            onClick={() => reset()}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Reset
          </button>
        </div>
      </nav>
    </>
  );
};
