import { Router } from 'express';
import { create,findAll, deleteUsr,findOne,update,validate} from '../controllers/user.controller';
import { verifyTokenMiddleware } from '../middlewares/verifyToken.middleware';

const userRoute:Router = Router();

userRoute.get("/",verifyTokenMiddleware, findAll);
userRoute.get("/:id",verifyTokenMiddleware,findOne);
userRoute.post("/", create);
userRoute.post("/login", validate);
userRoute.delete("/delete/:id",verifyTokenMiddleware,deleteUsr);
userRoute.put("/update/:id",verifyTokenMiddleware, update);

export default userRoute;