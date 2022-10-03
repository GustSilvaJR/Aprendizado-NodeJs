/* eslint-disable linebreak-style */
import { ICategoryRepository } from '../../../repositories/ICateogoryRepository';

interface ICeateCategorieService {
  name: string,
  description: string,
}

export class CreateCategorieUseCase {

  private categoryRepository : ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute({ description, name }: ICeateCategorieService): void {
    let categoryAlreadyExists = this.categoryRepository.findAlreadyExists(name);

    if (categoryAlreadyExists) {

      throw new Error('Category already exists!');
    
    } else {

      this.categoryRepository.create({ name, description });
    }
  }
}