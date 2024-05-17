import { EmailExistException } from "../Exceptions/EmailExistExeption";
import { IdIsUndefinedException } from "../Exceptions/IdIsUndefinedException";
import { UserDoesNotExistExeption } from "../Exceptions/UserDoesNotExistExeption";
import { UserInterface } from "../interfaces/user.interface";
import User from "./schemas/user.schema";

export const createModel = async (user: UserInterface) => {
  try {
    const userData = new User(user);
    // buscar si existe usuario (filtrar por email)
    //el email debe ser unico
    const { email } = userData;
    const userExist = await User.findOne({ email });

    if (userExist) {
      throw new EmailExistException("The email already exists");
    }
    // guardar el usuario
    const savedUser = await userData.save();
    console.log(savedUser);
    const { apellido, carrera, edad, nombre, registrationDate, _id } =
      savedUser;
    //TODO: hacer mappers
    if (_id == undefined) {
      // en una de esas nunca lo use, pero que lindo queda.
      throw new IdIsUndefinedException("_id invalido");
    }
    const userResponse: UserInterface = {
      _id,
      apellido,
      carrera,
      edad,
      email,
      nombre,
      registrationDate,
    };

    return userResponse;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    //verifica si el usuario existe
    await findById(id);
    await User.findByIdAndDelete(id);
    return { message: "User deleted successfully" };
  } catch (error) {
    throw error;
  }
};

export const findById = async (id: string) => {
  try {
    const _id = id;
    const userExist = await User.findById(_id);
    if (!userExist) {
      throw new UserDoesNotExistExeption("User not found");
    }

    return userExist;
  } catch (error) {
    throw error;
  }
};

export const findAll = async ()=>{
   try{

   }catch(error){
    
   }
}

/* 
export const get = async (req:Request, res:Response) => {
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
*/
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
*/
