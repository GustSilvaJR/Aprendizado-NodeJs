import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUseCase } from './ListCategoryUseCase';


const categoryRepository = CategoriesRepository.getInstance();
const categoryListRepository = new ListCategoryUseCase(categoryRepository);
const categoryListController = new ListCategoryController(categoryListRepository);

export { categoryListController };