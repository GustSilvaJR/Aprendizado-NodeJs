/* eslint-disable linebreak-style */
import express from 'express';

//typeorm
import 'reflect-metadata';
import { AppDataSource } from './src/database/index';

//Route
import { homeRoute } from './src/routes/home.route';

//To use my enviroments variables
import dotenv from 'dotenv';





AppDataSource.initialize();

const app = express();

dotenv.config({ path:'./.env' });
const port = process.env.PORT;

app.use(express.json());
app.use(homeRoute);

app.listen(port);