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
    setTeamState((prevTeam) => {
      if (prevTeam.teamCount < 5) {
        return {
          ...prevTeam,
          members: [...prevTeam.members, newMember],
          teamCount: prevTeam.teamCount + 1,
          isFull: prevTeam.teamCount + 1 === 5,
        };
      } else {
        setBtn(true); // Deshabilita el botón cuando el equipo está lleno
        return prevTeam; // Retorna el estado sin cambios
      }
    });
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
  const disableAll = () => {
    setBtn(false);
  };
  return (
    <TeamContext.Provider
      value={{
        teamState,
        addMember,
        reset,
        isDisabled,
        disableBtn,
        disableAll,
      }}
    >
      {/* Renderizar otros componentes si es necesario */}
      {children}
    </TeamContext.Provider>
  );
};
