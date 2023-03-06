import { IUserRepository } from '../../repositories/IUserRepository';

export class ForgotPassUseCase {
  private userRepository:IUserRepository;

  constructor(userRespository: IUserRepository) {
    this.userRepository = userRespository;
  }

  execute(email:string):Promise<boolean> {
    return this.userRepository.sendRecEmail(email);
  }
}