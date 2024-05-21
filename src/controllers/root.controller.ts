import {Request,Response} from 'express';
import { findAllRootModel } from '../models/product.model';
import { findAllRootModel as findAllCat } from '../models/category.model';
import { findAllRoot } from '../models/user.model';
import { expressConf } from '../config/express.config';
const URL = expressConf.URL;
export async function home(req:Request, res:Response){
  const products = await findAllRootModel();
  const categories = await findAllCat();
  const users = await findAllRoot();

  
  res.render("home",{products,categories,users,URL});
}

export async function documentation(req:Request, res:Response){
  res.render("documentation",{URL});
}
