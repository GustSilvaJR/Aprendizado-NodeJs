import { ISpecificationRepository } from '../../../repositories/ISpecificationRepository';

interface ISpecificationDTO  {
  name:string,
  description:string,
}

class CreateSpecificationUseCase {
  private _specificationRepository: ISpecificationRepository;

  constructor(specificationRepository:ISpecificationRepository) {
    this._specificationRepository = specificationRepository;
  }

  execute({ name, description }: ISpecificationDTO):void {
    let specificationAlreadyExists = this._specificationRepository.findByName( name );

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');   
    } else {
      this._specificationRepository.create({ name, description });
    }
  }

}

export { CreateSpecificationUseCase };