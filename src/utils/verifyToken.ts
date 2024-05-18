import jwt from "jsonwebtoken";

export function verifyToken(token:string) {
  
  
  try {
    //TODO: sacar secretp de env
    
    const decoded = jwt.verify(token, "secreto");

    
    return decoded;
  } catch (error) {
    //TODO: hacer excepcion para invalid token con NotAuthorized Exception
    throw error;
  }
}