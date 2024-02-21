import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";

interface props {
  img: string;
  name: string;
}

export const SmallCard = ({ img, name }: props) => {
  return (
    <div className="w-full mx-4 p-4 bg-gray-600 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-40 mb-5 object-cover rounded-t-lg"
        alt="Card Image"
        src={img}
      />
      <div className=" items-center mt-2 mb-2  flex font-sans text-xl font-semibold leading-relaxed text-inherit antialiase">
        <p className="text-emerald-400">{name}</p>
        <span className="text-emerald-400">
          <MdDriveFileRenameOutline />
        </span>
      </div>
    </div>
  );
};
