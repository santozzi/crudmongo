export class EmailExistException extends Error{
    public constructor(message:string){
        super(message);
    }
}