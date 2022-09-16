import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';
import { CreateCategorieService } from '../services/CreateCategorieService';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;


  let createCategoryRepository = new CreateCategorieService(categoryRepository);

  createCategoryRepository.execute({ name, description });
  
  return response.status(201).send();

});

categoriesRouter.get('/', (request, response) =>{

  let list = categoryRepository.listar();

  return response.status(200).json({ 'Categories':list });
});

export { categoriesRouter };
