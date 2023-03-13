import { Request, Response } from 'express';
import { adressApiController } from '../../adressApi';
import { qtdLicensesController } from '../../getQtdLicenses';
import { SignInUseCase } from './SignInUseCase';


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

    const result = await this._signInUseCase.execute({ email, password });

    if (typeof result == 'object') {
      const dataEnterprise = await adressApiController.handle(result.handle_enterprise);
      const qtd_license = await qtdLicensesController.handle(result.handle_enterprise, han_system);

      if (typeof dataEnterprise == 'object' && typeof qtd_license == 'number') {

        textResponse = {
          name_user: result.name_user,
          name_enterprise: dataEnterprise.nameEnterprise,
          type_user: result.type_user,
          adress_api: dataEnterprise.apiAdress,
          qtd_license,
          token: result.token,
          handle_enterprise: result.handle_enterprise,
          auth: true,
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

    return response.json(textResponse);
  }
}