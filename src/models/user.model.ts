import { EmailExistException } from "../Exceptions/EmailExistExeption";
import { IdIsUndefinedException } from "../Exceptions/IdIsUndefinedException";
import { UserDoesNotExistExeption } from "../Exceptions/UserDoesNotExistExeption";
import { UserInterface } from "../interfaces/user/user.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "./schemas/user.schema";
import { jwtConfig } from "../config/jwt.config";

//TODO: hacer una funcion que devuelva true o false para que el front verifique el email a la ora de cargar los datos de create

export const emailExist = async (email: string) => {
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new EmailExistException("The email already exists");
    }
  } catch (error) {
    throw error;
  }
};
//mapper
const userToUserInterfaceWithoutPassword = (user: any): UserInterface => {
  const { apellido, carrera, edad, nombre, registrationDate, email, _id,images } =
    user;
  const userResponse: UserInterface = {
    _id,
    apellido,
    carrera,
    edad,
    email,
    nombre,
    registrationDate,
    images
  };
  return userResponse;
};
//fin mapper

export const createModel = async (user: UserInterface) => {
  try {
    const userData = new User(user);
    const { email } = userData;
    await emailExist(email);
    // guardar el usuario
    const savedUser = await userData.save();

    if (savedUser._id == undefined) {
      //TODO: analisas si es posible que pase
      throw new IdIsUndefinedException("_id invalido");
    }

    return userToUserInterfaceWithoutPassword(savedUser);
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
export const findAll = async () => {
  try {
    const users = await User.find();
    const usersWithoutPassord = users.map((user:any) => {
      const userI: UserInterface = {
        _id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        carrera: user.carrera,
        edad: user.edad,
        email: user.email,
        registrationDate: user.registrationDate,
        images: user.images
      };
      return userI;
    });
    /*  si esta vacio que devuelva una lista vacia. []
    if (users.length === 0) {
      throw new UserDoesNotExistExeption("There are not users");
    } */
    return usersWithoutPassord;
  } catch (error) {
    throw new Error("Internal error");
  }
};
export const findAllRoot = async () => {
  try {
    const users = await User.find().lean();
   const usersWithoutPassord = users.map((user:any) => {
      const userI: UserInterface = {
        _id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        carrera: user.carrera,
        edad: user.edad,
        email: user.email,
        registrationDate: user.registrationDate,
        images: user.images

      }; 
      
      return userI;
    });
   
    /*  si esta vacio que devuelva una lista vacia. []
    if (users.length === 0) {
      throw new UserDoesNotExistExeption("There are not users");
    } */
    return usersWithoutPassord;
  } catch (error) {
    throw new Error("Internal error");
  }
};
export const update = async (id: string, payload: UserInterface) => {
  try {
    const user = await findById(id);
    const updateUser = await User.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });

    return userToUserInterfaceWithoutPassword(updateUser);
  } catch (error) {
    throw error;
  }
};
export const validate = async (email: string, password: string) => {
  try {
    const userFound = await User.findOne({ email });
    if (!userFound || userFound.password == null) {
      throw new UserDoesNotExistExeption("wrong email or password");
    }

    //La contraseña que llega de body la encriptamos y la comparamos contra la guardada
    if (bcrypt.compareSync(password, userFound.password)) {
      //payload, secreto, tiempo de expiracion
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };
      //firmar token

      const token = jwt.sign(payload, jwtConfig.JWT_SECRET, {
        expiresIn: jwtConfig.JWT_EXPIRED,
      });
      return token;
    } else {
      throw new UserDoesNotExistExeption("wrong email or password");
    }
  } catch (error) {
    throw error;
  }
};
