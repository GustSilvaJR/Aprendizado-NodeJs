/* eslint-disable linebreak-style */
import { ICategoryRepository } from '../repositories/ICateogoryRepository';

interface ICeateCategorieService {
  name: string,
  description: string,
}

export class CreateCategorieService {

  private categorieServiceRepository : ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categorieServiceRepository = categoryRepository;
  }

  execute({ description, name }: ICeateCategorieService): void {
    let categoryAlreadyExists = this.categorieServiceRepository.findAlreadyExists(name);

    if (categoryAlreadyExists) {

      throw new Error('Category already exists!');
    
    } else {

      this.categorieServiceRepository.create({ name, description });
    }
  }
}