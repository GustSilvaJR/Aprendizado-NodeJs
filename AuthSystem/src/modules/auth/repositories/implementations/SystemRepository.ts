import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

import { System } from '../../entities/System';
import { ISystemDTO, ISystemRepository } from '../ISystemRepository';

export class SystemRepository implements ISystemRepository {
  
  private static _INSTANCE: SystemRepository;

  private repository: Repository<System>;

  constructor() {
    this.repository = AppDataSource.getRepository(System);
  }

  public static getInstance(): SystemRepository {
    if (!SystemRepository._INSTANCE) {
      SystemRepository._INSTANCE = new SystemRepository();
    }
    return SystemRepository._INSTANCE;
  }

  async getSystem(handle: number): Promise< ISystemDTO | false> {
    
    try {
      const system = await this.repository.find({
        where:{
          HANDLE: handle,
        },
      });

      if (!(system.length == 0)) {
        const dataSystem:ISystemDTO = {
          nameSystem: system[0].NOM_SISTEMA,
          flgStatus: system[0].FLG_STATUS,
        };

        return dataSystem;

      } else {
        return false;
      }

    } catch (error) {
      throw new Error('Erro ao consultar sistema.\nError: ' + error );
    }
  }



}