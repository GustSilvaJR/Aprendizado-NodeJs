import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/ICateogoryRepository";


class ListCategoryUseCase{
    private _categoryRepository;

    constructor(categoryRepository:ICategoryRepository){
        this._categoryRepository = categoryRepository;
    }

    execute():Category[]{
        return this._categoryRepository.listar();
    }

}

export {ListCategoryUseCase}