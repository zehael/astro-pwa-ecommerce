import type { IUser } from "./user";

export interface IAuthRespoonse {
  jwt: string;
  user: IUser;
}