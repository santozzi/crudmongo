import User from "../models/schemas/user.schema";
import { Request, Response } from "express";
import { UserInterface } from "../interfaces/user/user.interface";
import { createModel,deleteUser,findById,findAll as get,update as updateModel, validate as validateModel } from "../models/user.model";
import { RequestWithUser } from "../interfaces/user/RequestWithUser";

export const create = async (req:Request, res:Response) => { 
    try {
   //TODO: validar el req con un middleware
   
   const {apellido,carrera, edad, nombre, password, email } = req.body;
   const user:UserInterface={
     apellido,
     carrera,
     edad,
     nombre,
     password,
     email
   }

   const userResponse:UserInterface = await createModel(user);
   
   
    // mostrar informacion del usuario guardado

    res.status(200).json(userResponse);
  } catch (error) {
    if(error instanceof Error){
      if(error.name=="EmailExistException"){
        res.status(409).json({ message: error.message });
      }else if (error.name=="IdIsUndefinedException"){
        res.status(404).json({ message: error.message });
      }else{
        res.status(500).json({ message: error.message });
      }
    }
    
  }
};
export const findAll = async (req:Request, res:Response) => {
  try {
    const users = await get();
    
    console.log("log desde findAll: ", (req as RequestWithUser).user);
    

    res.status(200).json(users);
  } catch (error) {
    if(error instanceof Error)
       res.status(500).json({ error: error.message });
  }
};
export const deleteUsr = async (req:Request, res:Response) => {
  try {
    const _id = req.params.id;

    await deleteUser(_id);
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    if(error instanceof Error){
      if (error.name == "UserDoesNotExistExeption")
        res.status(404).json({ error: error.message });
      else
        res.status(500).json({ error: "Internal error" });
    }
   
  }
}
export const findOne = async (req:Request, res:Response) => {
  try {
    const _id = req.params.id;
    const users = await findById(_id);
   
    res.status(200).json(users);
  } catch (error) {
    if(error instanceof Error){
      if(error.name == "UserDoesNotExistExeption"){
         res.status(404).json({ error: error.message });
      }else{
         res.status(500).json({ error: error.message});
      }
    }
 
  }
};
export const update = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    //actualizamos datos de usuario
    const updateUser = await updateModel(id,req.body);
    
    res.status(201).json(updateUser);
  } catch (error) {
    if (error instanceof Error){
      if(error.name == "UserDoesNotExistExeption" )
        res.status(404).json({ message: error.message });
   
      else
        res.status(500).json({ error: error.message});
    }
   
  }
};
export const validate = async (req:Request, res:Response) => {
  try {
    const {email, password} = req.body;
    const token = await validateModel(email, password)
    res.status(200).json({ token });
  
  } catch (error) {
    if(error instanceof Error){
      if(error.name == "UserDoesNotExistExeption"){
        res.status(400).json({ message: error.message });
      }else{
        res.status(500).json({ message: error.message });
      }
    }
    
    
  }
};


