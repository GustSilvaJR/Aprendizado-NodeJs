import { AdressApiUseCase } from './AdressApiUseCase';


export class AdressApiController {
  private _adressApiUseCase;

  constructor( adressApiUseCase: AdressApiUseCase) {
    this._adressApiUseCase = adressApiUseCase;
  }

  async handle(handleEmpresa: number | undefined) {
    console.log('Handle empresa: ' + handleEmpresa);

    const result = await this._adressApiUseCase.execute(handleEmpresa);
  
    return result;
  }
}