import { AuthSignInDTO } from '../../../interfaces/authSignInDTO';
import { IUserLoginDTO, IUserRepository } from '../../../repositories/IUserRepository';

export class SignInUseCase {
  private userRepository:IUserRepository;

  constructor(userRespository: IUserRepository) {
    this.userRepository = userRespository;
  }

  execute({ email, password }:IUserLoginDTO):Promise<AuthSignInDTO | false> {

    const newUser = {
      nom_usuario: 'Gustavo',
      nom_senha: '123456',
      nom_email: 'gust.offic@gmail.com',
      han_empresa:1,
    };

    this.userRepository.createUser(newUser);

    return this.userRepository.signIn({ email, password });
  }
}