import { User } from '../entities/User';
import { AuthSignInDTO } from '../interfaces/authSignInDTO';

export interface IUserDTO {
  nom_usuario:string,
  nom_senha:string,
  nom_email:string,
  han_empresa:number,
}

export interface IUserUpdateDTO{
  nom_usuario:string,
  nom_senha:string,
  nom_email:string,
  han_empresa:number,
  flg_status:string,
  flg_tipo_usuario:string,
}

export interface IUserLoginDTO {
  email:string,
  password:string
}

export interface IUserRepository {
  getUserByEmail(email:string): Promise<User | false>;
  getAllUsers(): Promise<Array<User> | false>;
  createUser({ nom_usuario, nom_senha, nom_email, han_empresa }:IUserDTO): Promise<boolean>;
  updateUser(dataUpdate:IUserDTO): Promise<boolean>;
  sendRecEmail(email: string): Promise<boolean>;
  signIn({ email, password }:IUserLoginDTO): Promise<AuthSignInDTO | false>;
}