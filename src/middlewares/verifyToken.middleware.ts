import { NextFunction,Request,Response } from "express";
import { verifyToken } from "../utils/verifyToken"
import { UserInterface } from "../interfaces/user.interface";
import { UserIdentify } from "../interfaces/userIdentify.interface";
export interface RequestWithUser extends Request{
   user:UserIdentify;
}



export const verifyTokenMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.header('authorization');
 
  

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token de acceso no proporcionado" });
  }
   const token = authHeader;
//  const token = authHeader.substring(7);
  console.log(token);
  try {
   
    const decoded = verifyToken(token);
    //guardar en el usuario que se verificó ok
    (req as RequestWithUser).user = decoded as UserIdentify;
  
    //console.log("req.user", (req as RequestWithUser).user);
    next();
  } catch (error) {
    if(error instanceof Error)
      res.status(401).json({ message: error.message});
  }
};