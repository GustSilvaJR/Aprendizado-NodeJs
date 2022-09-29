import { Router } from 'express';

import { categoryCreateController } from '../modules/cars/useCases/category/createCategory';
import { categoryListController } from '../modules/cars/useCases/category/listCategory';


const categoriesRouter = Router();

categoriesRouter.post('/', (request, response)=>{
  categoryCreateController.handle(request, response);
});

categoriesRouter.get('/', (request, response) =>{
  categoryListController.handle(request, response);
});

export { categoriesRouter };
