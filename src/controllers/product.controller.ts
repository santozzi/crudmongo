import { ProductInterface} from "../interfaces/product.interface";
import { Response, Request } from "express";
import { createModel, deleteModel, findAllModel, findByIdModel, updateModel } from "../models/product.model";

export const create = async (req: Request, res: Response) => {
  try {
    //TODO: validar el req con un middleware

    const { _id, name, category, description, price, quantity,images } = req.body;
    const product: ProductInterface = {
      _id,
      name,
      category,
      description,
      price,
      quantity,
      images
    };
    const productResponse: any = await createModel(product);
    // mostrar informacion del usuario guardado
    res.status(200).json(productResponse);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const deleteProduct = async(req: Request, res: Response)=>{
    try{
      const _id = req.params.id;
      await deleteModel(_id);
      res.status(201).json({ message: "Product deleted successfully" }); 
    }catch(error){
      if(error instanceof Error){
          res.status(500).json({ error: error.message});
      }
    }
}
export const findById=async(req: Request, res: Response)=>{
    try{
      const id = req.params.id;
      const product = await findByIdModel(id);
      res.status(200).json(product);
    }catch(error){
      if(error instanceof Error){
           res.status(500).json({ error: error.message});
      }
      
    }
}




export const findAll=async(req: Request, res: Response)=>{
    try{
              
      const products = await findAllModel();
      res.status(200).json(products);
    }catch(error){
      if(error instanceof Error)
        res.status(500).json({ error: error.message });
    }
}
export const update=async(req: Request, res: Response)=>{
    try{
      const id = req.params.id;
      const updateProduct = await updateModel(id,req.body);
      res.status(201).json(updateProduct);

    }catch(error){
      if (error instanceof Error){
        if(error.name == "UserDoesNotExistExeption" )
            res.status(500).json({ error: error.message});
    }
    }
}