import { IAddressId } from "./IAddressId";

export interface IUser {
    id: string;
    name: string;
    username: string;
    password: string;
    status?: boolean;
    user_type: string;
    document?: string;
    email: string;
    profile_image?: string;
    cel_phone?: string;
    addressId?: string;
    address?: IAddressId;
    categories?: string[];
    rating?: string[];
    social?: [{ name: string, url: string}];
}