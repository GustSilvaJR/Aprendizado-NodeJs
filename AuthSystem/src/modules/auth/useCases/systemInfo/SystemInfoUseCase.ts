import { ISystemDTO, ISystemRepository  } from '../../repositories/ISystemRepository';

export class SystemInfoUseCase {
  private systemRepository:ISystemRepository;

  constructor(systemRepository: ISystemRepository) {
    this.systemRepository = systemRepository;
  }

  execute(handle:number | undefined):Promise<ISystemDTO | false> {
    return this.systemRepository.getSystem(handle);
  }

}