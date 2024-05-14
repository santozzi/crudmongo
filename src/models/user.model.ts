import { EmailExistException } from "../Exceptions/EmailExistExeption";
import { UserInterface } from "../interfaces/user.interface";
import User from "./schemas/user.schema";


export const createModel = async (user: UserInterface):Promise<UserInterface> => {
  try {

  
    const userData = new User(user);


    // buscar si existe usuario (filtrar por email)
    //el email debe ser unico
    const { email } = userData;
    const userExist = await User.findOne({ email });
    
    
    if (userExist) {
      throw new EmailExistException("El email ya se encuentra en la base de datos");
    }
    
    
     // guardar el usuario
     const savedUser = await userData.save();
     console.log(savedUser);
    
     const { apellido,carrera, edad, nombre, registrationDate,_id } = savedUser;
     //TODO: hacer mappers
     if(_id==undefined){
       throw new Error("_id invalido")
     }
     const userResponse: UserInterface = {
        _id,
        apellido,
        carrera,
        edad,
        email,
        nombre,
        registrationDate
     }
    
     return userResponse;
    
  } catch (error) {
     throw new Error ("Error genérico");
  }
};

export const deleteUser = async (id:string) => {
  try {

    const userExist = await User.findOne({ id });
    if (!userExist) {
      throw new Error( "User not found");
    }
    await User.findByIdAndDelete(id);
    return { message: "User deleted successfully" };
  } catch (error) {
    throw new Error("internal server error" );
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