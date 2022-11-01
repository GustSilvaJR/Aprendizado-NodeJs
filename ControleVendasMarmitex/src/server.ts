import express from 'express';
import { homeRoute } from './routes/home.route';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(homeRoute);

app.listen(port);