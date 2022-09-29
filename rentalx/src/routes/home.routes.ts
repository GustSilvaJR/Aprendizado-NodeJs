import { Router } from 'express';
import path from 'path';

const home = Router();

home.get('/', (require, response)=>{
  return response.sendFile(path.join(__dirname + '/../views/index.html'));
});

export { home };