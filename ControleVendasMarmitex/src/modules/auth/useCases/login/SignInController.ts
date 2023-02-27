import { Request } from 'express';
import { SignInUseCase } from './SignInUseCase';


export class SignInController {

  private _signInUseCase;

  constructor(signInUseCase: SignInUseCase ) {
    this._signInUseCase = signInUseCase;
  }


  async handle(request:Request) {

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { email, password, han_system } = request.body;

    console.log('Aqui:', email, password, han_system );

    const result = await this._signInUseCase.execute({ email, password });

    const textResponse = {
      ...result,
      msg: result ? 'Logado com sucesso!' : 'Usuário ou senha inválidos',
    };

    return textResponse;
  }
}