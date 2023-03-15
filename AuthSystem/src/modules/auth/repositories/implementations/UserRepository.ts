import { DeleteResult, Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';

import jwt from 'jsonwebtoken';
import { User } from '../../entities/User';
import { AuthSignInDTO } from '../../interfaces/authSignInDTO';
import { IUserLoginDTO, IUserRepository, } from '../IUserRepository';
import md5 from 'md5';
import { IUserDTO } from '../../interfaces/IUserDTO';
import { IUserUpdateDTO } from '../../interfaces/IUserUpdateDTO';

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


    if (!(user.length == 0 || user[0].FLG_STATUS == 'I')) {

      const secret: string = String(process.env.SECRET);

      let val: AuthSignInDTO = {
        auth: true,
        token: jwt.sign({ email: user[0].NOM_EMAIL, filial: user[0].NOM_USUARIO, tipoUsuario: user[0].FLG_TIPO_USUARIO }, secret, { expiresIn: '1h' }),
        handle_enterprise: user[0].HAN_EMPRESA,
        type_user: user[0].FLG_TIPO_USUARIO,
        name_user: user[0].NOM_USUARIO,
      };

      return val;
    } else {
      return false;
    }

  }

  async sendRecEmail(email: string): Promise<boolean> {
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

    const datFomat = `${currentDate} ${currentHour}`;

    const datIncluido = new Date(datFomat);

    const user = await this.repository
      .createQueryBuilder()
      .insert()
      .values({
        NOM_USUARIO: dataUser.nom_usuario,
        DAT_INCLUIDO: datIncluido,
        NOM_SENHA: md5(dataUser.nom_senha),
        NOM_EMAIL: dataUser.nom_email,
        FLG_STATUS: 'A',
        HAN_EMPRESA: dataUser.han_empresa,
        FLG_TIPO_USUARIO: 'C',
      })
      .execute();

    if (user) {
      return true;

    } else {
      return false;

    }

  }

  async deleteUser(email: string): Promise<DeleteResult> {

    const userDeleted = await this.repository
      .createQueryBuilder()
      .delete()
      .where("NOM_EMAIL = :nom_email", { nom_email: email })
      .execute()

    return userDeleted;
  }

  async updateUser(dataUpdate: IUserUpdateDTO, email: string): Promise<boolean> {

    const user = await this.repository.findOneBy({ NOM_EMAIL: dataUpdate.email_original })

    console.log(user);

    if (user != null) {

      user.NOM_USUARIO = dataUpdate.nom_usuario.trim();
      user.NOM_EMAIL = dataUpdate.nom_email.trim();
      if (dataUpdate.nom_senha != '') {
        user.NOM_SENHA = md5(dataUpdate.nom_senha).trim();
      }
      user.FLG_STATUS = dataUpdate.flg_status;
      user.FLG_TIPO_USUARIO = dataUpdate.flg_tipo_usuario;

      await this.repository.save(user);

      return true;
    } else {
      return false;
    }

  }

  async getAllUsers(handle_enterprise: number): Promise<User[] | false> {

    const users = await this.repository
      .createQueryBuilder()
      .select(['NOM_USUARIO', 'NOM_EMAIL', 'FLG_STATUS', 'HAN_EMPRESA', 'FLG_TIPO_USUARIO'])
      .where({
        'HAN_EMPRESA': handle_enterprise,
      })
      .execute()


    if (users) {
      return users;

    } else {
      return false;

    }
  }

}