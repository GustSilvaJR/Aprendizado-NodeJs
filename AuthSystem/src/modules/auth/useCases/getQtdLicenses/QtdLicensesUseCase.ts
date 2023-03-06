import { ILicenseRepository } from '../../repositories/ILicenseRepository';


export class QtdLicensesUseCase {
  private licenseRepository: ILicenseRepository;

  constructor(licenseRepository: ILicenseRepository) {
    this.licenseRepository = licenseRepository;
  }

  execute(handle_enterprise:number | undefined, handle_system:number | undefined) {
    return this.licenseRepository.getLicensesSystem(handle_enterprise, handle_system);
  }
}