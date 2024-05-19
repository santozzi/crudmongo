import { Router } from "express";

import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { findAll,create,deleteProduct,findById,update } from "../controllers/product.controller";

const productRoute = Router();

//endpoints
productRoute.post("/create", verifyTokenMiddleware, create);
productRoute.get("/", verifyTokenMiddleware, findAll);
//por params le paso name
productRoute.get("/:id", verifyTokenMiddleware, findById);
productRoute.delete("/delete/:id", verifyTokenMiddleware, deleteProduct);
productRoute.put("/update/:id", verifyTokenMiddleware, update);
export default productRoute;
