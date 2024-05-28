import { Router } from 'express';
import { home,documentation,registro,login,dashboard } from '../controllers/root.controller';
import { createRoot } from '../controllers/user.controller';

const root:Router = Router();

root.get("/", documentation);
/* root.get("/documentation", documentation);
root.get("/register", registro);
root.get("/login", login);
root.get("/dashboard", dashboard);
root.post("/create", createRoot); */

export default root;
