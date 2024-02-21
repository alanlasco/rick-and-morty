import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
import { ModalMoreDetails } from "./ModalMoreDetails";
import { useContext, useState } from "react";
import { TeamContext } from "../context/TeamContext";
import { Member } from "../interfaces/inMember";
export interface characterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  type: string;
  gender: string;
}

export const Character = ({
  id,
  name,
  status,
  species,
  image,
  type,
  gender,
}: characterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { teamState, addMember, disableBtn, isDisabled, disableAll } =
    useContext(TeamContext);
  const newMember: Member = {
    idem: id,
    img: image,
    name: name,
  };
  const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(isDisabled());
  const handleClick = () => {
    addMember(newMember);
    setBtnIsDisabled(true);
    disableBtn();
  };
  const handleDisabled = () => {
    if (teamState.teamCount === 4) {
      return isDisabled();
    }
    if (btnIsDisabled === true && isDisabled() === false) {
      setBtnIsDisabled(false);
      return isDisabled();
    } else {
      return btnIsDisabled;
    }
  };

  return (
    <div className="relative flex w-75 flex-col rounded-xl bg-gray-600 bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-41 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-500 to-green-600">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div className="p-3 divide-y-2 divide-emerald-700 ">
        <div className=" items-center mb-2 flex font-sans text-xl font-semibold leading-relaxed text-inherit antialiase">
          <p className="text-emerald-400">{name}</p>
          <span className="text-emerald-400">
            <MdDriveFileRenameOutline />
          </span>
        </div>
        <div className=" items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
          <span className="text-emerald-500 ">
            <GrStatusInfo />
          </span>
          <p className="text-emerald-500 ">
            {" Status: "} {status}
          </p>
        </div>
        <div className="text-emerald-500 items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
          <span className="text-emerald-500">
            <FaUserAstronaut />
          </span>
          <p className="text-emerald-500">
            {" Species: "} {species}
          </p>
        </div>
      </div>
      <div className="mt-3 p-6 pt-0">
        <button
          onClick={() => setIsOpen(true)}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-green-400 hover:bg-green-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gren-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          More details
        </button>
      </div>
      <div className="mt-3 p-6 pt-0">
        <button
          onClick={() => handleClick()}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-green-400 hover:bg-green-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gren-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          disabled={handleDisabled()}
        >
          Add{" "}
        </button>
      </div>
      {isOpen && (
        <div className="fixed z-10 inset-0 bg-zinc-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-zinc-900 rounded-lg flex flex-col justify-center items-center p-5">
            <div>
              <ModalMoreDetails
                name={name}
                status={status}
                species={species}
                image={image}
                type={type}
                gender={gender}
              />
            </div>
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-red-400 hover:bg-red-700 m-5 py-2 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-gray shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
