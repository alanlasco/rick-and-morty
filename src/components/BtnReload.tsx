import React from "react";

interface BtnReloadProps {
  reload: () => void;
}

export const BtnReload = ({ reload }: BtnReloadProps) => {
  return (
    <>
      <button
        className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
        onClick={reload}
      >
        Reload characters
      </button>
    </>
  );
};
