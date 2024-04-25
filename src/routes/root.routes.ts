import { Router } from 'express';
import { home } from '../controllers/root.controller';

const root:Router = Router();

root.get("/", home);

export default root;
