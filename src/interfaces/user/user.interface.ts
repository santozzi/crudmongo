import { ObjectId } from "mongodb";

export interface UserInterface{
    _id?:string;
    nombre: string;
    apellido:  string;
    email: string;
    carrera:string;
    edad: number;
    registrationDate?: Date;
    password?: string;
    images?:string[];
}