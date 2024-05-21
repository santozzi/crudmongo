import { ObjectId } from "mongodb";

export interface UserInterface{
    _id?:ObjectId;
    nombre: string;
    apellido:  string;
    email: string;
    carrera:string;
    edad: number;
    registrationDate?: Date;
    password?: string;
    images?:string[];
}