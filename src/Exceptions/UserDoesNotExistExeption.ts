/**
*  Sie el email ya existe en la base de datos, se lanza esta excepción 
*/ 

export class UserDoesNotExistExeption extends Error{
    public constructor(message:string){
        super(message);
        this.name = "UserDoesNotExistExeption";
     
    }
}