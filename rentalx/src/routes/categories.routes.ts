import { Router } from 'express';
import { Category } from '../models/Category';

const categoriesRouter = Router();

const categories: Category[] = []; //Criei um array chamado categories, que é do tipo Category

categoriesRouter.post('/', (request, response)=>{

  const { name, description } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ 'object': category });
});

export { categoriesRouter };
