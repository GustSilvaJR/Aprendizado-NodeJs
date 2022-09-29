import { Request, Response } from 'express';
import { CreateCategorieUseCase } from './CreateCategoryUseCase';


class CreateCategoryController {

  private _createCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategorieUseCase) {
    this._createCategoryUseCase = createCategoryUseCase;
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this._createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };