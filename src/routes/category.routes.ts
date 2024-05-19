import { Router } from 'express';
import { create,findAll, deleteCategory,findById,update} from '../controllers/category.controller';
import { verifyTokenMiddleware } from '../middlewares/verifyToken.middleware';

const categoryRoute:Router = Router();
categoryRoute.post("/create",verifyTokenMiddleware, create);
categoryRoute.get("/", findAll);
categoryRoute.get("/:id",findById);
categoryRoute.delete("/delete/:id",verifyTokenMiddleware,deleteCategory);
categoryRoute.put("/update/:id",verifyTokenMiddleware, update); 

export default categoryRoute;