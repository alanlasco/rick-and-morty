import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SearchComponent } from "./SearchComponent";
import { character } from "../interfaces/inCharacter";
import { RiTeamLine } from "react-icons/ri";
import { Team } from "./Team";

export const Navbar = ({
  onSearch,
}: {
  onSearch: (results: character[]) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTeamMenu = () => {
    setIsTeamMenuOpen(!isTeamMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="fill-current h-10 w-40"
            src={require(`../images/rickandmorty.png`)}
            alt=""
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen
              ? "block text-center transition-all duration-500 ease-in-out"
              : "hidden"
          } `}
        >
          <div className="text-sm lg:flex-grow mt-2 mb-2">
            <SearchComponent onSearch={onSearch} />
          </div>
          <button
            onClick={toggleTeamMenu}
            className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full mx-auto ml-2"
          >
            <div className="flex items-center ml-2">
              Team
              <RiTeamLine className="ml-2" />
            </div>
          </button>
          <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full mx-auto">
            <div className="items-center">
              <Link to="/" className="flex items-center">
                Home
                <FaHome className="ml-2" />
              </Link>
            </div>
          </button>
        </div>
      </nav>
      <div>{isTeamMenuOpen && <Team />}</div>
    </>
  );
};
