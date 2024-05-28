
import express,{Request,Response} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rootRouter from './routes/root.routes'
import userRouter from './routes/user.routes';
import categoryRouter from './routes/category.routes';
import productRoute from './routes/product.routes';
import {engine} from "express-handlebars";
import path from 'path';
const app = express();

app.engine('.hbs',engine());
app.set('view engine','.hbs');
app.set('views', path.join(__dirname,'views'));

app.use('/public',express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//routes
app.use(rootRouter);
app.use("/api/users",userRouter);
app.use("/api/categories",categoryRouter);
app.use("/api/products",productRoute);

export default app;