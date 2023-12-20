import React from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Home = () => {
  return (
    <>
      <div
        data-testid="home-component"
        className="flex flex-col justify-center items-center h-screen bg-zinc-900 w-full"
      >
        <img
          className="w-1/2 max-w-lg h-auto md:w-1/2 sm:w-2/3"
          src={require(`../images/rickandmorty.png`)}
          alt=""
        />
        <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
          <div className="flex items-center">
            <Link to="./browser" className="flex items-center">
              Explore
              <FaMagnifyingGlass className="ml-2" />
            </Link>
          </div>
        </button>
      </div>
    </>
  );
};
