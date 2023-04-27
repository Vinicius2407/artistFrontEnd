import { IAddressId } from "./IAddressId";

export interface IPost {
    description: string;
    id: string;
    dh_create: Date;
    medias: [];
    user: {
        name: string;
    },
    event?: {
        name: string;
        description: string;
        dh_expiration: Date;
        address: IAddressId;
    }
}