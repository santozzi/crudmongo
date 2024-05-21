import dotenv from 'dotenv';
dotenv.config();
export interface ExpressConfig{
    PORT_EXPRESS:string;
    URL:string;
}
const {PORT_EXPRESS,URL} = process.env;
if(!PORT_EXPRESS)
    throw new Error ("PORT fail in env")
if(!URL)
    throw new Error ("URL fail in env")
export const expressConf:ExpressConfig={
    PORT_EXPRESS,
    URL
}