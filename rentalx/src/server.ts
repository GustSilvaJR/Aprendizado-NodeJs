import express from 'express';
import swagerUi from 'swagger-ui-express';
import swagerFile from './swager.json';
import { router } from './routes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inicializaConexao, PostgresDataSource } from './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swagerUi.serve, swagerUi.setup(swagerFile));

app.use('/static', express.static(__dirname + '/public'));

app.use(router);

inicializaConexao();

app.listen(3333);
