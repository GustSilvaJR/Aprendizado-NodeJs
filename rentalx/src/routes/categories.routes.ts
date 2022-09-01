import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;

  const categoryRepository = new CategoryRepository();
  categoryRepository.create({ name, description });

  return response.status(201);
});

export { categoriesRouter };
