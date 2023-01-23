import { IUserLoginDTO, IUserRepository } from '../../repositories/IUserRepository';

export class SignInUseCase {
  private userRepository:IUserRepository;

  constructor(userRespository: IUserRepository) {
    this.userRepository = userRespository;
  }

  execute({ email, password }:IUserLoginDTO):Promise<{ auth:boolean, adress: string | undefined } | false> {
    console.log('Passei no use case');
    return this.userRepository.signIn({ email, password });
  }
}