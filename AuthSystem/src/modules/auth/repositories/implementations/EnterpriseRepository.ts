import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

import { Enterprise } from '../../entities/Enterprise';
import { IEnterpriseDTO, IEnterpriseRepository } from '../IEnterpriseRepository';

export class EnterpriseRepository implements IEnterpriseRepository {

  private static _INSTANCE: EnterpriseRepository;

  private repository:Repository<Enterprise>;

  constructor() {
    this.repository = AppDataSource.getRepository(Enterprise);
  }

  public static getInstance(): EnterpriseRepository {
    if (!EnterpriseRepository._INSTANCE) {
      EnterpriseRepository._INSTANCE = new EnterpriseRepository();
    }
    return EnterpriseRepository._INSTANCE;
  }

  async getAddressApi(handle: number): Promise< IEnterpriseDTO | false> {
    
    try {
      const enterprise = await this.repository.find({
        where:{
          HANDLE: handle,
        },
      });

      if (!(enterprise.length == 0)) {
        const dataEnterprise:IEnterpriseDTO = {        
          nameEnterprise: enterprise[0].NOM_EMPRESA,
          apiAdress: enterprise[0].NOM_ENDERECO_API,
        };

        return dataEnterprise;

      } else {
        return false;
      }

    } catch (error) {
      throw new Error('Erro ao consultar empresa.\nError: ' + error );
    }
    
  }

}