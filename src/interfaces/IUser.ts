export interface IUser {
    id: string;
    name: string;
    username: string;
    password: string;
    status: boolean;
    user_type: string;
    document: string;
    email: string;
    profile_image: string;
    cellphone: string;
    addressId: string;

    categories: string[];
    rating: string[];
    social: [{ name: string, url: string}];
}