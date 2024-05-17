/**
*  Si el email ya existe en la base de datos, se lanza esta excepción 
*/ 

export class EmailExistException extends Error{
    public constructor(message:string){
        super(message);
        this.name= "EmailExistException";
    }
}