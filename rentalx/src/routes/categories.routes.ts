import { Router } from 'express';
import multer from 'multer';

import { categoryCreateController } from '../modules/cars/useCases/category/createCategory';
import { categoryListController } from '../modules/cars/useCases/category/listCategory';
import { categoryImportController } from '../modules/cars/useCases/category/importCategory';

const categoriesRouter = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRouter.post('/', (request, response)=>{
  categoryCreateController.handle(request, response);
});

categoriesRouter.get('/', (request, response) =>{
  categoryListController.handle(request, response);
});

categoriesRouter.post('/import', upload.single('file'), (request, response)=>{
  categoryImportController.handle(request, response);
});

export { categoriesRouter };
