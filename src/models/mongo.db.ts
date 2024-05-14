import { DBConnection, configDB } from "../config/db.config";
import mongoose from "mongoose";


const config:DBConnection = configDB();

export const mongooseConnection = ()=> mongoose
        .connect(config.MONGOURI)
        .then(
            ()=>{
                console.log("Database connected");
            }
        )
export const mongooseDisconect = ()=> mongoose.disconnect().then(()=>console.log("Database disconected")
);