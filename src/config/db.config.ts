import dotenv from 'dotenv';
dotenv.config();
export interface DBConnection{
   MONGOURI:string;
  
}

export function configDB():DBConnection{
    const {MONGOURI,PORT} = process.env
    if(!MONGOURI)
        throw new Error ("MONGOURI fail in env")


   const config:DBConnection = {
      MONGOURI

   }
   return config;
}