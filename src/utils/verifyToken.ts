import jwt from "jsonwebtoken";

export function verifyToken(token: string, secret: string) {
  try {
    
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    //TODO: hacer excepcion para invalid token con NotAuthorized Exception
    throw error;
  }
}
