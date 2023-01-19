import { IUserLoginDTO, IUserRepository } from '../../repositories/IUserRepository';

export class SignInUseCase {
  private userRepository:IUserRepository;

  constructor(userRespository: IUserRepository) {
    this.userRepository = userRespository;
  }

  execute({ email, password }:IUserLoginDTO):Promise<boolean> {
    return this.userRepository.signIn({ email, password });
  }
}