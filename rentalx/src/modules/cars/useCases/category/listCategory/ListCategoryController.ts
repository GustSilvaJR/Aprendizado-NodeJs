import { Request, Response } from 'express'
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController
{
    private _listCategoryUseCase;

    constructor(listCategoryUseCase:ListCategoryUseCase){
        this._listCategoryUseCase = listCategoryUseCase;
    }

    handle(request:Request, response:Response){
        const list = this._listCategoryUseCase.execute();

        return response.status(200).json({ 'Categories':list });
    }
}

export { ListCategoryController }