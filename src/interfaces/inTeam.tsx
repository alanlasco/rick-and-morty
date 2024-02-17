import { Member } from "./inMember";

export interface teamState {
  teamCount: number;
  members: Member[];
  isFull: boolean;
}
