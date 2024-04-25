import {Request,Response} from 'express';

export function home(req:Request, res:Response){
  res.status(200).json({message: "hola api con mongo"});
}