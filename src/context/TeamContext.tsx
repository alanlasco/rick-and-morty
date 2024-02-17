import { createContext } from "react";
import { teamState } from "../interfaces/inTeam";
import { Member } from "../interfaces/inMember";

export type TeamContextProps = {
  teamState: teamState;
  addMember: (member: Member) => void;
  reset: () => void;
};
export const TeamContext = createContext<TeamContextProps>(
  {} as TeamContextProps
);
