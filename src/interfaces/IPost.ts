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
        rating: number
    },
    event: {
        id:string;
        name: string,
        description: string,
        dh_expiration: string,
        dh_event: string,
        address: IAddressId,
        budget: string,
        people: string,
        category: ICategoriesEvent[]
    }
}