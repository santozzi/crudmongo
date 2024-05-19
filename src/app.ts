
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rootRouter from './routes/root.routes'
import userRouter from './routes/user.routes';
import categoryRouter from './routes/category.routes';
import productRoute from './routes/product.routes';
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//routes
app.use(rootRouter);
app.use("/api/users",userRouter);
app.use("/api/categories",categoryRouter);
app.use("/api/products",productRoute);
export default app;