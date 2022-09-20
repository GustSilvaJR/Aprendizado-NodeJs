import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface ISpecificationDTO  {
  name:string,
  description:string,
}

class CreateSpecificationService {
  private _specificationServiceRepository: ISpecificationRepository;

  public CreateSpecificationRepository(specificationRepository:ISpecificationRepository) {
    this._specificationServiceRepository = specificationRepository;
  }

  execute({ name, description }: ISpecificationDTO):void {
    let specificationAlreadyExists = this._specificationServiceRepository.findByName( name );

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');   
    } else {
      this._specificationServiceRepository.create({ name, description });
    }
  }

}

export { CreateSpecificationService };