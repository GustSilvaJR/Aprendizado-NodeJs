import { LicenseRepository } from '../../repositories/implementations/LicenseRepository';
import { QtdLicensesController } from './QtdLicensesController';
import { QtdLicensesUseCase } from './QtdLicensesUseCase';


const licenseRepository = LicenseRepository.getInstance();
const qtdLicensesUseCase = new QtdLicensesUseCase(licenseRepository);
const qtdLicensesController = new QtdLicensesController(qtdLicensesUseCase);

export { qtdLicensesController };