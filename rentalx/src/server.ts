import express from 'express';
import swagerUi from 'swagger-ui-express';
import swagerFile from './swager.json';
import { router } from './routes';
import { PostgresDataSource } from './database';

const app = express();

console.log(PostgresDataSource.isInitialized);

app.use(express.json());

app.use('/api-docs', swagerUi.serve, swagerUi.setup(swagerFile));

app.use('/static', express.static(__dirname + '/public'));

app.use(router);

app.listen(3333);
