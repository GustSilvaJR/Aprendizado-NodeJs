import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';


const categoryImportUseCase = new ImportCategoryUseCase();
const categoryImportController = new ImportCategoryController(categoryImportUseCase);

export { categoryImportController };