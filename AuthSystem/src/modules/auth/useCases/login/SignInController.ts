import { Request, Response } from 'express';
import { adressApiController } from '../adressApi';
import { SignInUseCase } from './SignInUseCase';
import { qtdLicensesController } from '../getQtdLicenses';


export class SignInController {

  private _signInUseCase;

  constructor(signInUseCase: SignInUseCase) {
    this._signInUseCase = signInUseCase;
  }


  async handle(request: Request, response:Response) {

    let textResponse: any;

    //Recebendo dados vindos da requisição
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { email, password, han_system } = request.body;

    console.log('Aqui:', email, password, han_system);

    const result = await this._signInUseCase.execute({ email, password });

    if (typeof result == 'object') {
      const dataEnterprise = await adressApiController.handle(result.han_empresa);
      const qtdLicense = await qtdLicensesController.handle(result.han_empresa, han_system);

      if (typeof dataEnterprise == 'object' && typeof qtdLicense == 'number') {

        textResponse = {
          token: result.token,
          auth: result.auth,
          nom_enterprise: dataEnterprise.nameEnterprise,
          adress_api: dataEnterprise.apiAdress,
          qtdLicense,
          msg: result ? 'Logado com sucesso!' : 'Usuário ou senha inválidos',
        };

      } else {
        textResponse = {
          auth: false,
          msg: 'Não foi possível acessar dados da empresa e/ou sistema',
        };
      }

    } else {
      textResponse = {
        auth: result,
        msg: 'Usuário ou senha inválidos',
      };

    }

    console.log(textResponse);
    return response.json(textResponse);
  }
}