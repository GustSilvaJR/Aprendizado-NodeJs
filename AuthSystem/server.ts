/* eslint-disable linebreak-style */
import express from 'express';

//Alowing cross-origin
import cors from 'cors';

//typeorm
import 'reflect-metadata';
import { AppDataSource } from './src/database/index';

//Routes
import { authRoute } from './src/routes/auth.route';
import { userRoute } from './src/routes/user.route';

//To use my enviroments variables
import dotenv from 'dotenv';





AppDataSource.initialize();

const app = express();

dotenv.config({ path:'./.env' });
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use([authRoute, userRoute]);

app.listen(port);