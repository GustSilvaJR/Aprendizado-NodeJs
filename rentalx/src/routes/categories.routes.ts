import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;

  let categoryAlreadyExists = categoryRepository.findAlreadyExists( name );

  if (categoryAlreadyExists) {

    return response.status(401).json({ 'Message':'User already exists' });
  } else {
    
    categoryRepository.create({ name, description });
    return response.status(201).send();
  }
});

categoriesRouter.get('/', (request, response) =>{

  let list = categoryRepository.listar();

  return response.status(200).json({ 'Categories':list });
});

export { categoriesRouter };
