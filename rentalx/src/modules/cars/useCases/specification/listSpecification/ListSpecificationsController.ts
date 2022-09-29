import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';


class ListSpecificationsController {
  private _listSpecificationUseCase;

  constructor(listSpecificationUseCase:ListSpecificationsUseCase) {
    this._listSpecificationUseCase = listSpecificationUseCase;
  }

  handle(request:Request, response:Response) {
    const data = this._listSpecificationUseCase.execute();
    return response.status(200).json({ 'Specifications':data });
  }
}

export { ListSpecificationsController };