import dotenv from 'dotenv';
dotenv.config();
export interface ExpressConfig{
    PORT_EXPRESS:string;
}
const PORT_EXPRESS = process.env.PORT_EXPRESS;
if(!PORT_EXPRESS)
    throw new Error ("PORT fail in env")

export const expressConf:ExpressConfig={
    PORT_EXPRESS
}