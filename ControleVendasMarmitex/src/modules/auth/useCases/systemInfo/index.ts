import { SystemRepository } from '../../repositories/implementations/SystemRepository';
import { SystemInfoController } from './SystemInfoController';
import { SystemInfoUseCase } from './SystemInfoUseCase';

const systemRepository = SystemRepository.getInstance();
const systemInfoUseCase = new SystemInfoUseCase(systemRepository);
const systemInfoController = new SystemInfoController(systemInfoUseCase);

export { systemInfoController };