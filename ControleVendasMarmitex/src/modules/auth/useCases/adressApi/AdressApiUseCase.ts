import { IEnterpriseDTO, IEnterpriseRepository } from '../../repositories/IEnterpriseRepository';


export class AdressApiUseCase {
    
  private enterpriseRepository:IEnterpriseRepository;

  constructor(enterpriseRepository: IEnterpriseRepository) {
    this.enterpriseRepository = enterpriseRepository;
  }

  execute(handle:number):Promise<IEnterpriseDTO | false> {
    return this.enterpriseRepository.getAddressApi(handle);
  }


}