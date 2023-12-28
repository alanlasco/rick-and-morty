import { LuFileType } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa6";
import { TbGenderNeutrois } from "react-icons/tb";
export interface characterProps {
  name: string;
  status: string;
  species: string;
  image: string;
  type: string;
  gender: string;
}
export const ModalMoreDetails = ({
  name,
  status,
  species,
  image,
  type,
  gender,
}: characterProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-600 bg-clip-border text-emerald-600 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-600 bg-clip-border text-emerald-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-3 divide-y-2 divide-emerald-700 ">
          <div className=" items-center mb-2 flex font-sans text-3xl font-semibold leading-relaxed text-inherit antialiase">
            <p className="text-emerald-400">{name}</p>
            <span className="text-emerald-400">
              <MdDriveFileRenameOutline />
            </span>
          </div>
          <div className="p-6">
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
            <div className="text-emerald-500 items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
              <span className="text-emerald-500">
                <LuFileType />
              </span>
              <p className="text-emerald-500">
                {" Type: "} {!type ? "Normal" : type}
              </p>
            </div>
            <div className="text-emerald-500 items-center p-2 flex font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
              <span className="text-emerald-500">
                <TbGenderNeutrois />
              </span>
              <p className="text-emerald-500">
                {" Gender: "} {gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
