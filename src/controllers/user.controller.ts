import User from "../models/schemas/user.schema";
import { Request, Response } from "express";
import { UserInterface } from "../interfaces/user.interface";
import { createModel,deleteUser,findById } from "../models/user.model";
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

    res.status(500).json({ message: error });
  }
};
export const findAll = async (req:Request, res:Response) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "There are no users" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
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

/* 
export const update = async (req:Request, res:Response) => {
  try {
    //saber que vamos a actualizar con un identificador unico
    const id = req.params.id;
    //saber si existe la entidad a actualizar
    const userExist = await User.findOne({ _id: id });
    console.log(req.params.id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    //actualizamos datos de usuario
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};


}; */