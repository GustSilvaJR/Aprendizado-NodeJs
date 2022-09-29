/* eslint-disable linebreak-style */
import { ICategoryRepository } from '../../../repositories/ICateogoryRepository';

interface ICeateCategorieService {
  name: string,
  description: string,
}

export class CreateCategorieUseCase {

  private categorieRepository : ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categorieRepository = categoryRepository;
  }

  execute({ description, name }: ICeateCategorieService): void {
    let categoryAlreadyExists = this.categorieRepository.findAlreadyExists(name);

    if (categoryAlreadyExists) {

      throw new Error('Category already exists!');
    
    } else {

      this.categorieRepository.create({ name, description });
    }
  }
}