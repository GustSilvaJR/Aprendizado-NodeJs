import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/home', (request, response) => {
    return response.send({express:"Bem vindo ao sistema!"});
});

homeRouter.get('/api/mensagem', (request, response) => {
    console.log('passei aqui');
    return response.send({ express:"Hello World!" });
});

export { homeRouter };