
export interface IEnterpriseDTO {
  nameEnterprise:string | undefined,
  apiAdress:string | undefined,
}

export interface IEnterpriseRepository {
  getAddressApi(handle:number | undefined):Promise<IEnterpriseDTO | false>;
}