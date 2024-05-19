import { NextFunction,Request,Response } from "express";
import { verifyToken } from "../utils/verifyToken"
import { UserIdentify } from "../interfaces/user/userIdentify.interface";
import { RequestWithUser } from "../interfaces/user/RequestWithUser";
import { jwtConfig } from "../config/jwt.config";





export const verifyTokenMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.header('authorization');
   if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token de acceso no proporcionado" });
  }
   const token = authHeader;

  try {
    //si no verifica salta una excepcion
   
    
    const decoded = verifyToken(token,jwtConfig.JWT_SECRET);
    //guardar en el usuario que se verificó ok
    (req as RequestWithUser).user = decoded as UserIdentify;
  

    next();
  } catch (error) {
    if(error instanceof Error)
      res.status(401).json({ message: error.message});
  }
};