import mongoose from "mongoose";
import { isGoodPassword } from "../../utils/validator";
import bcrypt from "bcryptjs";
const carreraEnum = [
    "ingenieria",
    "medicina",
    "derecho",
    "matematicas",
    "arte",
  ];
  
   const userSchema =  new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      maxlength: 16,
      minlength: 2,
      trim: true,
      lowercase: true,
    },
  
    apellido: {
      type: String,
      required: true,
      maxlength: 16,
      minlength: 2,
      trim: true,
      lowercase: true,
    },
  
    email: {
      type: String,
      required: true,
      maxlength: 30,
      minlength: 8,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
      unique: true,
    },
  
    carrera: {
      type: String,
      required: true,
      enum: carreraEnum,
      validate: {
        validator: function (v:any) {
          return carreraEnum.includes(v);
        },
        message: (props:any) => `${props.value} no es una carrera valida`,
      },
    },
  
    edad: {
      type: Number,
      required: true,
      min: 17,
      max: 120,
    },
  
    registrationDate: {
      type: Date,
      default: Date.now(),
    },
    images:Array<String>,
  
    password: {
      type: String,
      validate: {
        validator: 
            function (value:any) {
              return isGoodPassword(value);
            }
        ,
        message:
          "La contraseña debe tener entre 6 y 12 caracteres, un digito numerico, una letra minuscula, una letra mayuscula",
      },
    },
  });
  userSchema.pre("save", function (next) {
    if(this.password !=null)
       this.password = bcrypt.hashSync(this.password, 10);
    next();
  });
  export default mongoose.model("user", userSchema);