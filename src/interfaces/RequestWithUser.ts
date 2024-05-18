import { UserIdentify } from "./userIdentify.interface";
import {Request} from "express";

export interface RequestWithUser extends Request{
    user:UserIdentify;
 }