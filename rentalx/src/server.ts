import express from 'express';

const app = express();

app.get('/', (request, response)=>{
  return response.json('Hello World! Welcome Sr.');
});

app.post('/courses', (request, response)=>{
  const { body } = request.body;

  return response.json(body);
});

app.listen(3333);
