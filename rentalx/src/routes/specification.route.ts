import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();
const specificationRepository = new SpecificationRepository;

specificationsRouter.post('/', (request, response)=>{
  const { name, description } = request.body;
  const createServiceSpecification = new CreateSpecificationService(specificationRepository);

  createServiceSpecification.execute({ name, description });
  return response.status(201).send();
});

specificationsRouter.get('/', (request, response) => {
  const data = specificationRepository.list();
  return response.status(200).json({ 'Specifications':data });
});

export { specificationsRouter };