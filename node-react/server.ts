import  express from 'express';
import { homeRouter } from './routes/home.route';
import { instrucaoServicoRouter } from './routes/instrucaoServico.route';

const app = express();
const port = process.env.PORT || 5000;

console.log(port);

app.use(express.json());

app.use(homeRouter);
app.use(instrucaoServicoRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));