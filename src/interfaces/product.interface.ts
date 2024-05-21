import { CategoryInterface } from "./category.interface";

export interface ProductInterface {
    _id?:string;
    name:string;
    price:number;
    description:string;
    quantity:number;
    category:CategoryInterface;
    images?:string[];
}