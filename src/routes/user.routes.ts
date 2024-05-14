import { Router } from 'express';
import { create,findAll } from '../controllers/user.controller';

const user:Router = Router();

user.post("/", create);
user.get("/",findAll);

export default user;