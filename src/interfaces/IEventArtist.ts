import { IUser } from "./IUser";


export interface IEventArtist
 {
    id: string;
    artist: IUser;
    userId: string;
    accept: boolean;
    dh_action: Date;
    artistId: string;
    eventId: string;
}