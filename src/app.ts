
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rootRouter from './routes/root.routes'
import userRouter from './routes/user.routes';
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//routes
app.use(rootRouter);
app.use("/users",userRouter);
export default app;