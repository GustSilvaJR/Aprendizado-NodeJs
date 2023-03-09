import { SystemInfoUseCase } from './SystemInfoUseCase';

export class SystemInfoController {
  private _systemInfoUseCase;

  constructor(systemInfoUseCase: SystemInfoUseCase) {
    this._systemInfoUseCase = systemInfoUseCase;
  }

  async handle(handleSistema: number | undefined) {
    
    const result = await this._systemInfoUseCase.execute(handleSistema);

    return result;
  }

}