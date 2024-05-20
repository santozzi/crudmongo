import { CategoryInterface } from "../interfaces/category.interface";
import { Response, Request } from "express";
import { createModel, deleteModel, findAllModel, findByIdModel, updateModel } from "../models/category.model";

export const create = async (req: Request, res: Response) => {
  try {
    //TODO: validar el req con un middleware


    const categoryResponse = await createModel(req.body);
    // mostrar informacion del usuario guardado
    res.status(200).json(categoryResponse);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
export const deleteCategory = async(req: Request, res: Response)=>{
    try{
      const _id = req.params.id;
      await deleteModel(_id);
      res.status(201).json({ message: "Category deleted successfully" }); 
    }catch(error){
      if(error instanceof Error){
          res.status(500).json({ error: error.message});
      }
    }
}
export const findById=async(req: Request, res: Response)=>{
    try{
      const id = req.params.id;
      const category = await findByIdModel(id);
      res.status(200).json(category);
    }catch(error){
      if(error instanceof Error){
           res.status(500).json({ error: error.message});
      }
      
    }
}
export const findAll=async(req: Request, res: Response)=>{
    try{
      const categories = await findAllModel();
      res.status(200).json(categories);
    }catch(error){
      if(error instanceof Error)
        res.status(500).json({ error: error.message });
    }
}
export const update=async(req: Request, res: Response)=>{
    try{
      const id = req.params.id;
      const updateCategory = await updateModel(id,req.body);
      res.status(201).json(updateCategory);

    }catch(error){
      if (error instanceof Error){
        if(error.name == "UserDoesNotExistExeption" )
            res.status(500).json({ error: error.message});
    }
    }
}
