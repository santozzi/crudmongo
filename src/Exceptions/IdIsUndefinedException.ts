export class IdIsUndefinedException extends Error{
    public constructor(message:string){
        super(message);
        this.name= "IdIsUndefinedException";
    }
}