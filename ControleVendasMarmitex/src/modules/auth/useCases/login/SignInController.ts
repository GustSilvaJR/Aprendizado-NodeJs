import { Request, Response } from 'express';
import { SignInUseCase } from './SignInUseCase';


export class SignInController {

  private _signInUseCase;

  constructor(signInUseCase: SignInUseCase) {
    this._signInUseCase = signInUseCase;
  }


  async handle(request:Request, response:Response) {

    const { email, senha } = request.body;

    const result = await this._signInUseCase.execute({ email, senha });

    const textResponse = {
      auth:result,
      msg: result ? 'Logado com sucesso!' : 'Usuário ou senha inválidos',
    };

    return response.json(textResponse);
  }
}