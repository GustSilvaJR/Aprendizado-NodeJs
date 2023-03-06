import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

import jwt from 'jsonwebtoken';
import { User } from '../../entities/User';
import { AuthSignInDTO } from '../../interfaces/authSignInDTO';
import { IUserDTO, IUserLoginDTO, IUserRepository } from '../IUserRepository';
import md5 from 'md5';

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

  async signIn({ email, password }: IUserLoginDTO): Promise<AuthSignInDTO | false> {

    const user = await this.repository.find({
      where: {
        NOM_EMAIL: email,
        NOM_SENHA: password,
      },
    });

    if (!(user.length === 0)) {

      const secret: string = String(process.env.SECRET);

      let val: AuthSignInDTO = {
        auth: true,
        token: jwt.sign({ email: user[0].NOM_EMAIL, filial: user[0].NOM_USUARIO }, secret, { expiresIn: '1h' }),
        han_empresa: user[0].HAN_EMPRESA,
      };

      return val;
    } else {
      return false;
    }

  }

  async sendRecEmail(email: string): Promise<boolean> {
    console.log('E-mail recebido: ' + email);

    return await this.getUserByEmail(email) ? true : false;
  }

  async getUserByEmail(email: string): Promise<User | false> {

    const user = await this.repository.find({
      where: {
        NOM_EMAIL: email,
      },
    });

    if (user.length > 0) {
      return user[0];
    } else {
      return false;
    }
  }

  async createUser(dataUser: IUserDTO): Promise<boolean> {
    
    const date = new Date();

    //Pegando a data atual
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    //Pegando o horário atual
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const currentHour = `${hour}:${minutes}:${seconds}`;
    const currentDate = `${year}-${month}-${day}`;

    const datIncluido = `${currentDate} ${currentHour}`;

    console.log('Data criação de usuario:' + datIncluido);
    console.log(dataUser);

    const user = await this.repository
      .createQueryBuilder()
      .insert()
      .values({
        DAT_INCLUIDO: datIncluido,
        NOM_USUARIO: dataUser.nom_usuario,
        NOM_SENHA: md5(dataUser.nom_senha),
        NOM_EMAIL: dataUser.nom_email,
        FLG_STATUS: 'A',
        HAN_EMPRESA: dataUser.han_empresa,
        FLG_TIPO_USUARIO: 'C',
      })
      .execute();

    if (user) {
      console.log(typeof(user), user);
      return true;

    } else {
      console.log(typeof(user), user);
      return false;
      
    }

  }

  getAllUsers(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

}