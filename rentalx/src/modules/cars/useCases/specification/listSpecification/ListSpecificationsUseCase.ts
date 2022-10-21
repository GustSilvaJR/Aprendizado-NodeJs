/* eslint-disable linebreak-style */
import { Specification } from '../../../entities/Specification';
import { ISpecificationRepository } from '../../../repositories/ISpecificationRepository';

class ListSpecificationsUseCase {
  private _specificationRepository;

  constructor(specificationRepository: ISpecificationRepository) {
    this._specificationRepository = specificationRepository;
  }

  execute():Specification[] {
    return this._specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };