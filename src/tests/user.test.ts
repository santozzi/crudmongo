import { mongooseConnection,mongooseDisconect } from '../models/mongo.db';
import app from '../app';
import request from 'supertest';
import {UserInterface} from '../interfaces/user.interface'
import { ObjectId } from 'mongodb';

const route = '/users/'
const usuario: UserInterface = {
    apellido : "Alvarez",
    nombre: "Julian",
    carrera:"ingenieria",
    edad:24,
    email:"julian@campeones2231099.com",
    password:"123454aA"
}

beforeAll(async()=> await mongooseConnection())
describe('GET /users',() =>{
    
    test('should respond with a 200 status code',async ()=>{
         const response = await request(app).get(route).send();
       expect(response.statusCode).toBe(200);
         
    });
    test('should respond with an array', async ()=>{
        const response = await request(app).get(route).send();
        expect(response.body).toBeInstanceOf(Array)
    })
})

describe('POST /users',()=>{
    let id:ObjectId;
    test('should respond with a 200 status code',async ()=>{
        const response = await request(app).post(route).send(usuario);
        const nuevoUsuario:UserInterface = JSON.parse(response.text);
        id = new ObjectId(nuevoUsuario._id);
        
        expect(response.statusCode).toBe(200);
    })
    test('should response ok',async()=>{
        console.log(await request(app).delete(route+id))
    })
})
afterAll(async()=> await mongooseDisconect());