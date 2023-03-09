export interface AuthSignInDTO {
  auth:boolean,
  token: string,
  han_empresa: number | undefined,
  tipo_usuario: string | undefined,
  name_user: string | undefined,
}