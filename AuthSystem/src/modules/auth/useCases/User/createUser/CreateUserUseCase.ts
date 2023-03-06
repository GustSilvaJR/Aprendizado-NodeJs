import { IUserDTO, IUserRepository } from '../../../repositories/IUserRepository';

export class CreateUserUseCase {
  private userRepository: IUserRepository;
    
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  execute(dataUser:IUserDTO):Promise<boolean> {
    return this.userRepository.createUser(dataUser);
  }
}