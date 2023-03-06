import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '192.168.1.250',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'dgs_cloud',
  entities: ['./src/modules/auth/entities/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });