/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  private _createUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this._createUserUseCase = createUserUseCase;
  }

  async handle(request: Request, response: Response) {
    const { nom_usuario, nom_senha, nom_email, han_empresa } = request.body;

    const result = await this._createUserUseCase.execute({ nom_usuario, nom_senha, nom_email, han_empresa });

    return response.json(result);
  }


}