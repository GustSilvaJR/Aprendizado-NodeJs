import { Request, Response } from 'express';
import { SignInUseCase } from './SignInUseCase';


export class SignInController {

  private _signInUseCase;

  constructor(signInUseCase: SignInUseCase ) {
    this._signInUseCase = signInUseCase;
  }


  async handle(request:Request, response:Response) {

    const { email, password } = request.body;

    console.log('Aqui:', email, password );

    const result = await this._signInUseCase.execute({ email, password });

    const textResponse = {
      ...result,
      msg: result ? 'Logado com sucesso!' : 'Usuário ou senha inválidos',
    };

    return response.json(textResponse);
  }
}