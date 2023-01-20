import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';
//import md5 from 'md5';

import { User } from '../../entities/User';
import { IUserRepository, IUserDTO, IUserLoginDTO } from '../IUserRepository';

export class UserRepository implements IUserRepository {

  private static _INSTANCE: UserRepository;

  private repository: Repository<User>;

  private constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public static getInstance(): UserRepository {
    if (!UserRepository._INSTANCE) {
      UserRepository._INSTANCE = new UserRepository();
    }
    return UserRepository._INSTANCE;
  }

  async signIn({ email, password }: IUserLoginDTO): Promise<boolean> {

    console.log(email, password);

    const user = await this.repository.find({
      where: {
        email: email,
        senha: password,
      },
    });

    let val = user.length === 0 ? false : true;

    return val;
  }

  async sendRecEmail(email: string): Promise<boolean> {
    console.log('E-mail recebido: ' + email);

    return await this.getUserByEmail(email) ? true : false;
  }

  async getUserByEmail(email: string): Promise<User | false> {

    const user = await this.repository.find({
      where: {
        email: email,
      },
    });

    if (user.length > 0) {
      return user[0];
    } else {
      return false;
    }
  }

  getAllUsers(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  createUser({ name, email, senha }: IUserDTO): Promise<User> {
    console.log(name, email, senha);
    throw new Error('Method not implemented.');
  }

}