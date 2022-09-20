import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specifications = Router();
const specificationRepository = new SpecificationRepository;

specifications.post('/', (request, response)=>{
  const { name, description } = request.body;
  const createServiceSpecification = new CreateSpecificationService(specificationRepository);

  createServiceSpecification.execute({ name, description });
  return response.status(201).send();
});