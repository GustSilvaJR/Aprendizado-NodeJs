import { Request, Response } from 'express';
import { ForgotPassUseCase } from './ForgotPassUseCase';


export class ForgotPassController {

  private _forgotPassUseCase;

  constructor(forgotPassUseCase: ForgotPassUseCase) {
    this._forgotPassUseCase = forgotPassUseCase;
  }


  async handle(request:Request, response:Response) {

    const { email } = request.body;

    console.log('Aqui:', email);

    const result = await this._forgotPassUseCase.execute(email);

    const textResponse = {
      exists: result,
      msg: result ? 'E-mail de recuperação enviado com sucesso!' : 'E-mail não cadastrado no sistema.',
    };

    return response.json(textResponse);
  }
}