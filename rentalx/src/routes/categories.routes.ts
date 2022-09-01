import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) =>{

  let list = categoryRepository.listar();

  return response.status(200).json({ 'Categories':list });
});

export { categoriesRouter };
