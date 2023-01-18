import { User } from '../entities/User';

export interface IUserDTO {
  name:string,
  email:string,
  senha:string,
}

export interface IUserLoginDTO {
  email:string,
  senha:string
}

export interface IUserRepository {
  getUserByEmail(email:string): Promise<User>;
  getAllUsers(): Promise<Array<User>>;
  createUser({ name, email, senha }:IUserDTO): Promise<User>

  signIn({ email, senha }:IUserLoginDTO): Promise<boolean>;
}