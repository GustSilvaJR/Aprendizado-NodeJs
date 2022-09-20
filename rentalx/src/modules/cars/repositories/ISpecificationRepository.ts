import { Specification } from '../models/Specification';

interface ISpecificationDTO {
  name:string,
  description: string,
}

interface ISpecificationRepository {
  create({ name, description }: ISpecificationDTO):void;
  findByName(name:string): Specification;
}

export { ISpecificationRepository, ISpecificationDTO };