import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  private _importCategoryUseCase;

  constructor(importCategoryUseCase: ImportCategoryUseCase) {
    this._importCategoryUseCase = importCategoryUseCase;
  }

  handle(request:Request, response:Response) {
    const { file } = request;
    this._importCategoryUseCase.execute(file);
    return response.status(201).send();
  }
}

export { ImportCategoryController };