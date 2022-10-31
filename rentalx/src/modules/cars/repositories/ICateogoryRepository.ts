/* eslint-disable linebreak-style */
import { Category } from '../entities/Category';

interface ICategoryDTO {
  name: string,
  description: string,
}

interface ICategoryRepository {
  findAlreadyExists(name: string) : Promise<boolean>;
  listar():Promise<Category[]>;
  create({ name, description }: ICategoryDTO): Promise<void>;
}

export { ICategoryRepository };