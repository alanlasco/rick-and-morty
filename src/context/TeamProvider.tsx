import React, { useState } from "react";
import { Member } from "../interfaces/inMember";
import { teamState } from "../interfaces/inTeam";
import { TeamContext } from "./TeamContext";

const INITIAL_STATE: teamState = {
  teamCount: 0,
  members: [],
  isFull: false,
};
interface props {
  children: JSX.Element | JSX.Element[];
}

export const TeamProvider = ({ children }: props) => {
  const [teamState, setTeamState] = useState<teamState>(INITIAL_STATE);

  const addMember = (newMember: Member) => {
    setTeamState((prevTeam) => {
      // Copiar el estado actual
      const updatedTeamState: teamState = { ...prevTeam };

      // Actualizar el array de members
      updatedTeamState.members = [...prevTeam.members, newMember];

      return updatedTeamState;
    });
  };

  const reset = () => {
    console.log(teamState.members);
    setTeamState(INITIAL_STATE);
    console.log(teamState.members);
  };

  return (
    <TeamContext.Provider value={{ teamState, addMember, reset }}>
      {/* Renderizar otros componentes si es necesario */}
      {children}
    </TeamContext.Provider>
  );
};
