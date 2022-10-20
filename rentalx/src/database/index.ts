import { DataSource } from 'typeorm';

//using environment variables
import dotenv from 'dotenv';

dotenv.config();

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'database_ignite',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentalx',
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
});

async function  inicializaConexao() {
  await PostgresDataSource.initialize()
    .then(() => {
      console.log('Data Source Initialized');
      console.log(PostgresDataSource.isInitialized);
    })
    .catch((error) => {
      console.error('Error During Initializing Data Source: ' + error);
    });
}





export { PostgresDataSource, inicializaConexao };
