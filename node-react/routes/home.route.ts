import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello World!' });
});

export { homeRouter };