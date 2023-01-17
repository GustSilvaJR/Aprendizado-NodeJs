import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

import { User } from '../../entities/User';
import { IUserRepository, IUserDTO } from '../IUserRepository';

export class UserRepository implements IUserRepository {

  private static _INSTANCE: UserRepository;

  private repository: Repository<User>;

  private constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public static getInstance():UserRepository {
    if (!UserRepository._INSTANCE) {
      UserRepository._INSTANCE = new UserRepository();
    }
    return UserRepository._INSTANCE;
  }

  getUserByEmail(email: string): Promise<User> {
    console.log(email);
    throw new Error('Method not implemented.');
  }

  getAllUsers(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  createUser({ name, email, senha }: IUserDTO): Promise<User> {
    console.log(name, email, senha);
    throw new Error('Method not implemented.');
  }
    
}