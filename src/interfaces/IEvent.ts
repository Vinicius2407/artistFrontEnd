<<<<<<< HEAD
export interface IEvent {
    eventName: string;
    description: string;
    dateBegin: Date;
    dateEnd: Date;
    address: {
        cep: string;
        number: number;
        street: string;
        neighborhood: string;
        city: string;
        country: string};
    category: string[]
=======
import { IAddressId } from "./IAddressId";
import { ICategories } from "./ICategories";
import { ICategoriesEvent } from "./ICategoriesEvent";

export interface IEvent {
    name: string,
    description: string,
    dh_expiration: string,
    dh_event: string,
    address: IAddressId,
    budget: string,
    people: string,
    user: {
        id:string;
        name: string;
        categories: ICategories[],
        profile_image: string,
        user_type: string
    },
    category:{
        categories: ICategoriesEvent[]
    }
    
>>>>>>> e5c18697fbc4c9e1a8c9e2091ca53ee7d3e3a0ef
}