import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const categoriesRouter = Router();

const categories = [];

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;

  categories.push({
    id: uuid(),
    name,
    description,
  });

  return response.status(201).json({ 'objects': categories });

});

export { categoriesRouter };
