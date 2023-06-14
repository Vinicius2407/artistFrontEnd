import { ICategory } from "./ICategory";
import { IUser } from "./IUser";

export interface IRating
 {
    userId: string;
    user: IUser;
    userRate: IUser;
    value: Number; 
}