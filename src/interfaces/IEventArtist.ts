import { IUser } from "./IUser";


export interface IEventArtist
 {
    id: string;
    artist: IUser;
    userId: string;
    budget: Number;
    accept: Boolean;
}