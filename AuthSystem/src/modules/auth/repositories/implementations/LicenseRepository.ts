import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';
import { License } from '../../entities/License';
import { ILicenseRepository } from '../ILicenseRepository';

export class LicenseRepository implements ILicenseRepository {
    
  private static _INSTANCE: LicenseRepository;

  private repository:Repository<License>;

  constructor() {
    this.repository = AppDataSource.getRepository(License);
  }

  public static getInstance(): LicenseRepository {
    if (!LicenseRepository._INSTANCE) {
      LicenseRepository._INSTANCE = new LicenseRepository();
    }

    return LicenseRepository._INSTANCE;
  }

  async getLicensesSystem(handle_enterprise: number | undefined, handle_system: number | undefined): Promise<false | number | undefined> {
    try {
        
      const license = await this.repository.find({
        where:{
          HAN_EMPRESA: handle_enterprise,
          HAN_SISTEMA: handle_system,
        },
      });

      if (!(license.length == 0)) {
        const dataLicense:number | undefined = license[0].QTD_LICENCAS;

        return dataLicense;

      } else {
        return false;
      }

    } catch (error) {
      throw new Error('Erro ao consultar licença.\nError: ' + error );
        
    }
  }

}