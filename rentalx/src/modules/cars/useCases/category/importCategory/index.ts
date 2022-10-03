import { CategoriesRepository } from '../../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoryRepository = CategoriesRepository.getInstance();
const categoryImportUseCase = new ImportCategoryUseCase(categoryRepository);
const categoryImportController = new ImportCategoryController(categoryImportUseCase);

export { categoryImportController };