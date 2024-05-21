import { Router } from 'express';
import { home,documentation } from '../controllers/root.controller';

const root:Router = Router();

root.get("/", home);
root.get("/documentation", documentation);

export default root;
