import { CategoryRepository } from '../repositories/CategoriesRepository';

interface ICeateCategorieService {
  name: string,
  description: string,
}

export class CreateCategorieService {

  private categorieServiceRepository : CategoryRepository;

  constructor(categoryRepository: CategoryRepository) {
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