import { Specification } from '../../entities/Specification';
import { ISpecificationRepository, ISpecificationDTO } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {

  private static _INSTANCE:SpecificationRepository;
  private _specifications: Specification[];

  private constructor() {
    this._specifications = [];
  }

  public static getInstance():SpecificationRepository{
    if(!SpecificationRepository._INSTANCE){
      SpecificationRepository._INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository._INSTANCE;
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

  list():Specification[] {
    return this._specifications;
  }

  findByName(name: string): Specification {
    const specificationAlreadyExists = this._specifications.find(specification => (specification.name === name));
    return specificationAlreadyExists;
  }
}

export { SpecificationRepository };