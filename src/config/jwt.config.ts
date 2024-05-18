import dotenv from 'dotenv';
dotenv.config();

export interface JWTConfig{
    JWT_EXPIRED:string;
    JWT_SECRET:string;
}


const {JWT_EXPIRED,JWT_SECRET } = process.env;
if(!JWT_EXPIRED)
    throw new Error ("JWT_EXPIRED fail in env")
if(!JWT_SECRET)
    throw new Error ("JWT_SECRETE fail in env")

export const jwtConfig:JWTConfig={
    JWT_EXPIRED,
    JWT_SECRET
}