import { User } from '../entities/User';
import { AuthSignInDTO } from '../interfaces/authSignInDTO';

export interface IUserDTO {
  name:string,
  email:string,
  senha:string,
}

export interface IUserLoginDTO {
  email:string,
  password:string
}

export interface IUserRepository {
  getUserByEmail(email:string): Promise<User | false>;
  getAllUsers(): Promise<Array<User>>;
  createUser({ name, email, senha }:IUserDTO): Promise<User>
  sendRecEmail(email: string): Promise<boolean>
  signIn({ email, password }:IUserLoginDTO): Promise<AuthSignInDTO | false>;
}