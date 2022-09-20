import { Router } from 'express';


const index = Router();
import path from 'path';

index.get('/', (require, response)=>{
  return response.sendFile(path.join(__dirname + '/../views/index.html'));
});

export { index };