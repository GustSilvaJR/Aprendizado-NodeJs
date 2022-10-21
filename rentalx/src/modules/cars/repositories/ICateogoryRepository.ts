/* eslint-disable linebreak-style */
import { Category } from '../entities/Category';

interface ICategoryDTO {
  name: string,
  description: string,
}

interface ICategoryRepository {
  findAlreadyExists(name: string) : boolean;
  listar():Category[];
  create({ name, description }: ICategoryDTO): void;
}

export { ICategoryRepository };