import { DeleteResult } from 'typeorm';
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
  getAllUsers(handle_enterprise:number): Promise<Array<User> | false>;
  createUser({ nom_usuario, nom_senha, nom_email, han_empresa }:IUserDTO): Promise<boolean>;
  updateUser(dataUpdate:IUserDTO): Promise<boolean>;
  deleteUser(email:string): Promise<DeleteResult>;
  sendRecEmail(email: string): Promise<boolean>;
  signIn({ email, password }:IUserLoginDTO): Promise<AuthSignInDTO | false>;
}