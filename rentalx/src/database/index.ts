import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'rentalx',
});

PostgresDataSource.initialize()
  .then(()=>{
    console.log('Data Source Initialized');
  })
  .catch((error)=>{
    console.error('Error During Initializing Data Source: ' + error);
  });

export { PostgresDataSource };
