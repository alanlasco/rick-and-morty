import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { ModalMoreDetails } from "./ModalMoreDetails";
import { characterProps } from "../interfaces/inCharacterProps";

export const SmallCard = ({
  id,
  name,
  status,
  species,
  image,
  type,
  gender,
}: characterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="w-full mx-4 p-4 bg-gray-600 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        <img
          className="w-full h-40 mb-5 object-cover rounded-t-lg"
          alt="Card Image"
          src={image}
        />
        <div className=" items-center mt-2 mb-2  flex font-sans text-xl font-semibold leading-relaxed text-inherit antialiase">
          <p className="text-emerald-400">{name}</p>
          <span className="text-emerald-400">
            <MdDriveFileRenameOutline />
          </span>
        </div>
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
    </>
  );
};
