import { EnterpriseRepository } from '../../repositories/implementations/EnterpriseRepository';
import { AdressApiController } from './AdressApiController';
import { AdressApiUseCase } from './AdressApiUseCase';


const enterpriseRepository = EnterpriseRepository.getInstance();
const adressApiUseCase = new AdressApiUseCase(enterpriseRepository);
const adressApiController = new AdressApiController(adressApiUseCase);

export { adressApiController };
