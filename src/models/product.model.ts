import { ProductInterface } from "../interfaces/product.interface"
import Product from "../models/schemas/product.schema";


export const findByName = async (name:string)=>{
    try{
       const product = await Product.findOne({name});
       if(product){
         throw new Error("Product exist");
       }
    }catch(error){
        throw error;
    }
}

export const createModel =async(payload:ProductInterface)=>{
    try{
      await findByName(payload.name);
      const productData = new Product(payload);
      const {name} = productData;
      const savedProduct = await productData.save();
      return savedProduct;
    }catch(error){
        throw error;
    }
    }
export const deleteModel =async(id:string)=>{
try{
    await findByIdModel(id);
    await Product.findByIdAndDelete(id);
    return { message: "Product deleted successfully" };
}catch(error){
    throw error;
}
}
export const findByIdModel =async(id:string)=>{
try{
    const _id = id;
    const productExist = await Product.findById(_id);

    if (!productExist) {
        throw new Error("Product not found");
    }

    return productExist;
}catch(error){
    throw error;
}
}

export const findAllRootModel = async()=>{
    try{
        const products = await Product.find().populate("category").lean();
        //TODO:mandar solo 4 articulos
        if(products.length>4){
            return products.slice(0,4);
        }
        return products;
    }catch(error){
        throw error;
    }
}


export const findAllModel =async()=>{
try{
    const products = await Product.find().populate("category");
    return products;
}catch(error){
    throw error;
}
}
export const updateModel =async(id:string, payload:ProductInterface)=>{
try{
    await findByIdModel(id);
    const updateProduct = await Product.findByIdAndUpdate({_id:id},payload,{
    new:true
    })
    return updateProduct;
}catch(error){
    throw error;
}
//TODO: buscar por nombre, findByName
}