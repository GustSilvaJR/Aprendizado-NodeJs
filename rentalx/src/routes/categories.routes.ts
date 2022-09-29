import { Router } from 'express';

import { categoryController } from '../modules/cars/useCases/createCategory';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response)=>{
  categoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) =>{

  let list = categoriesRepository.listar();

  return response.status(200).json({ 'Categories':list });
});

export { categoriesRouter };
