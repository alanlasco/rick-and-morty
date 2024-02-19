import React, { useState } from "react";
import { Member } from "../interfaces/inMember";
import { teamState } from "../interfaces/inTeam";
import { TeamContext } from "./TeamContext";

interface props {
  children: JSX.Element | JSX.Element[];
}
interface btn {
  isDisable: boolean;
}
export const TeamProvider = ({ children }: props) => {
  const INITIAL_STATE: teamState = {
    teamCount: 0,
    members: [],
    isFull: false,
  };
  const INITIAL_MEMBER: Member = {
    idem: 0,
    img: "",
    name: "",
  };

  const [teamState, setTeamState] = useState<teamState>(INITIAL_STATE);
  const [member, setMember] = useState<Member>(INITIAL_MEMBER);
  const [btn, setBtn] = useState<boolean>(false);
  const addMember = (newMember: Member) => {
    teamState.teamCount <= 5
      ? setTeamState((prevTeam) => {
          // Copiar el estado actual
          const updatedTeamState: teamState = { ...prevTeam };

          // Actualizar el array de members
          updatedTeamState.members = [...prevTeam.members, newMember];
          teamState.teamCount += 1;
          return updatedTeamState;
        })
      : (teamState.isFull = true);
  };

  const reset = () => {
    console.log(teamState.members);
    setTeamState(INITIAL_STATE);
    setMember(INITIAL_MEMBER);
    setBtn(false);
    console.log(teamState.members);
  };
  const isDisabled = () => {
    return btn;
  };
  const disableBtn = () => {
    setBtn(true);
  };

  return (
    <TeamContext.Provider
      value={{ teamState, addMember, reset, isDisabled, disableBtn }}
    >
      {/* Renderizar otros componentes si es necesario */}
      {children}
    </TeamContext.Provider>
  );
};
