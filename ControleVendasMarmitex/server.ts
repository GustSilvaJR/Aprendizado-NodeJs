/* eslint-disable linebreak-style */
import express from 'express';
import { homeRoute } from './src/routes/home.route';

import dotenv from 'dotenv';

const app = express();

const result = dotenv.config({ path:'./.env' });

console.log(result);

const port = process.env.PORT;

app.use(express.json());
app.use(homeRoute);

app.listen(port);