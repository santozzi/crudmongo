import { CategoryInterface } from "./category.interface";

export interface ProductInterface {
    id?:string;
    name:string;
    price:number;
    description:string;
    quantity:number;
    category:CategoryInterface;
    images?:string[];
}