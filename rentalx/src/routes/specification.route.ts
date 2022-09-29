import { Router } from 'express';
import { specificationCreateController } from '../modules/cars/useCases/specification/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/specification/listSpecification/index';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response)=>{
  specificationCreateController.handle(request, response);
});

specificationsRouter.get('/', (request, response) => { 
  listSpecificationsController.handle(request, response);
});

export { specificationsRouter };