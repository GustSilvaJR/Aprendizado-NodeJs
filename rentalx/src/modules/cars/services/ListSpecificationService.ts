import { SpecificationRepository } from '../repositories/SpecificationRepository';

class ListSpecificationService {
  private _specificationServiceRepository;

  constructor(specificationRepository: SpecificationRepository) {
    this._specificationServiceRepository = specificationRepository;
  }

  execute():SpecificationRepository[] {
    return this._specificationServiceRepository.list();
  }
}

export { ListSpecificationService };