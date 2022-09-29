/* eslint-disable linebreak-style */
import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';


const categoryRepository = CategoriesRepository.getInstance();
const categoryCreateUseCase = new CreateCategorieUseCase(categoryRepository);
const categoryCreateController = new CreateCategoryController(categoryCreateUseCase);

export { categoryCreateController, categoryRepository };