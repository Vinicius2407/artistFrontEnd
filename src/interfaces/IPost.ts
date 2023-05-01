import { IAddressId } from "./IAddressId";
import { ICategories } from "./ICategories";
import { ICategoriesEvent } from "./ICategoriesEvent";
import { ICategory } from "./ICategory";

export interface IPost {
    description: string;
    id: string;
    dh_create: Date;
    medias: [];
    user: {
        id:string;
        name: string;
        categories: ICategories[],
        profile_image: string,
        user_type: string
    },
    event: {
        name: string,
        description: string,
        dh_expiration: Date,
        address: IAddressId,
        budget: string,
        people: string,
        category: ICategoriesEvent[]
    }
}