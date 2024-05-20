import { CategoryInterface } from "../interfaces/category.interface"
import Category from "../models/schemas/category.schema";
export const createModel =async(payload:CategoryInterface)=>{
try{
  const categoryData = new Category(payload);
  const {name} = categoryData;
  const savedCategory = await categoryData.save();
  return savedCategory;
}catch(error){
    throw error;
}
}
export const deleteModel =async(id:string)=>{
try{
   await findByIdModel(id);
   await Category.findByIdAndDelete(id);
   return { message: "Category deleted successfully" };
}catch(error){
    throw error;
}
}
export const findByIdModel =async(id:string)=>{
try{
    const _id = id;
    const userExist = await Category.findById(_id);
    if (!userExist) {
      throw new Error("category not found");
    }

    return userExist;
}catch(error){
    throw error;
}
}
export const findAllModel =async()=>{
try{
  const categories = await Category.find();
  return categories;
}catch(error){
    throw error;
}
}
export const findAllRootModel =async()=>{
  try{
    const categories = await Category.find().lean();
    if(categories.length>4){
        return categories.slice(0,4);
    }
    return categories;
  }catch(error){
      throw error;
  }
  }
export const updateModel =async(id:string, payload:CategoryInterface)=>{
try{
  await findByIdModel(id);
  const updateCategory = await Category.findByIdAndUpdate({_id:id},payload,{
    new:true
  })
  return updateCategory;
}catch(error){
    throw error;
}
}