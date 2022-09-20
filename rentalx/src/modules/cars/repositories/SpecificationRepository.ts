import { Specification } from '../models/Specification';
import { ISpecificationRepository, ISpecificationDTO } from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {

  private _specifications: Specification[];

  constructor() {
    this._specifications = [];
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();
    
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this._specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specificationAlreadyExists = this._specifications.find(specification => (specification.name === name));
    return specificationAlreadyExists;
  }
}

export { SpecificationRepository };