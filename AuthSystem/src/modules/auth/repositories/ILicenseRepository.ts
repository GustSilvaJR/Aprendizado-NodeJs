
export interface ILicenseRepository {
  getLicensesSystem(handle_empresa:number | undefined, handle_system:number | undefined):Promise<false | number | undefined>;
}