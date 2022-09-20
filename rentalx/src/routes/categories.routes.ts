import { Router } from 'express';
import { CreateCategorieService } from '../modules/cars/services/CreateCategorieService';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;


  let createCategoryRepository = new CreateCategorieService(categoriesRepository);

  createCategoryRepository.execute({ name, description });
  
  return response.status(201).send();

});

categoriesRouter.get('/', (request, response) =>{

  let list = categoriesRepository.listar();

  return response.status(200).json({ 'Categories':list });
});

export { categoriesRouter };
