
export interface ISystemDTO {
  nameSystem: string | undefined,
  flgStatus: string | undefined,
}

export interface ISystemRepository {
  getSystem(handle:number | undefined): Promise<ISystemDTO | false>;
}