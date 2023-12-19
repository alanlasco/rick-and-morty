import React from "react";
import { CharacterProps } from "../interfaces/InCharacterProps";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
export const Character = (props: CharacterProps) => {
  return (
    <div className="relative flex w-75 flex-col rounded-xl bg-gray-600 bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-41 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-500 to-green-600">
        <img className="h-full w-full" src={props.image} alt="" />
      </div>
      <div className="p-3 divide-y-2 divide-emerald-700 ">
        <p className="text-emerald-400 items-center mb-2 flex font-sans text-xl font-semibold leading-relaxed text-inherit antialiase">
          {props.name}
          <MdDriveFileRenameOutline />
        </p>
        <p className="text-emerald-500 items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
          <GrStatusInfo />
          {" Status: "}
          {props.status}
        </p>
        <p className="text-emerald-500 items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
          <FaUserAstronaut />
          {" Species: "}
          {props.species}
        </p>
      </div>
      <div className="mt-3 p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-green-400 hover:bg-green-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gren-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          More details
        </button>
      </div>
    </div>
  );
};
