export interface AuthSignInDTO {
  auth:boolean,
  token: string,
  handle_enterprise: number | undefined,
  type_user: string | undefined,
  name_user: string | undefined,
}