import { QtdLicensesUseCase } from './QtdLicensesUseCase';

export class QtdLicensesController {
  private _qtdLicensesUseCase;

  constructor(qtdLicensesUseCase: QtdLicensesUseCase) {
    this._qtdLicensesUseCase = qtdLicensesUseCase;
  }

  async handle(handle_enterprise:number | undefined, handle_system:number | undefined) {  
    const result = await this._qtdLicensesUseCase.execute(handle_enterprise, handle_system);

    return result;
  }
}