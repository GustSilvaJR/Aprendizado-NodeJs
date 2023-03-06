import { User } from '../entities/User';
import { AuthSignInDTO } from '../interfaces/authSignInDTO';

export interface IUserDTO {
  nom_usuario:string,
  nom_senha:string,
  nom_email:string,
  han_empresa:number,
}

export interface IUserLoginDTO {
  email:string,
  password:string
}

export interface IUserRepository {
  getUserByEmail(email:string): Promise<User | false>;
  getAllUsers(): Promise<Array<User>>;
  createUser({ nom_usuario, nom_senha, nom_email, han_empresa }:IUserDTO): Promise<boolean>
  sendRecEmail(email: string): Promise<boolean>
  signIn({ email, password }:IUserLoginDTO): Promise<AuthSignInDTO | false>;
}