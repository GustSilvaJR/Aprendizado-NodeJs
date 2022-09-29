import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';


const categoryRepository = new CategoriesRepository;
const categoryUseCase = new CreateCategorieUseCase(categoryRepository);
const categoryController = new CreateCategoryController(categoryUseCase);

export { categoryController };