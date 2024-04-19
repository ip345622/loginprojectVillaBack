import bodyParser from 'body-parser';
import  express from "express";
import morgan from "morgan";
import cors from "cors";

import userRoutes from './src/routes/auth.routes.js'

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api',userRoutes);



export default app;