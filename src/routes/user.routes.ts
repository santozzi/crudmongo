import { Router } from 'express';
import { create,findAll, deleteUsr,findOne} from '../controllers/user.controller';

const userRoute:Router = Router();
//TODO verifyTokenMiddleware para entrar a zonas restrigidas
userRoute.get("/",findAll);
userRoute.get("/:id",findOne);
userRoute.post("/", create);
//userRoute.post("/login", validate);
userRoute.delete("/delete/:id",deleteUsr);
//userRoute.put("/update/:id", update);



export default userRoute;