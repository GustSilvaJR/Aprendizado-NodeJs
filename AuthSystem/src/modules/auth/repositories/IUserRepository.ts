import { DeleteResult } from 'typeorm';
import { User } from '../entities/User';
import { AuthSignInDTO } from '../interfaces/authSignInDTO';
import { IUserDTO } from '../interfaces/IUserDTO';
import { IUserUpdateDTO } from '../interfaces/IUserUpdateDTO';




export interface IUserLoginDTO {
  email:string,
  password:string
}

export interface IUserRepository {
  getUserByEmail(email:string): Promise<User | false>;
  getAllUsers(handle_enterprise:number): Promise<Array<User> | false>;
  createUser({ nom_usuario, nom_senha, nom_email, han_empresa }:IUserDTO): Promise<boolean>;
  updateUser(dataUpdate:IUserUpdateDTO, email:string): Promise<boolean>;
  deleteUser(email:string): Promise<DeleteResult>;
  sendRecEmail(email: string): Promise<boolean>;
  signIn({ email, password }:IUserLoginDTO): Promise<AuthSignInDTO | false>;
}