import express from 'express';
import { categoriesRouter } from './routes/categories.routes';
import { index } from './routes/index.routes';
import { specificationsRouter } from './routes/specification.route';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specifications', specificationsRouter);
app.use('/', index);

app.listen(3333);
