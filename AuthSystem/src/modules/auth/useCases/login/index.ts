import { UserRepository } from '../../repositories/implementations/UserRepository';
import { SignInController } from './SignInController';
import { SignInUseCase } from './SignInUseCase';


const userRepository  = UserRepository.getInstance();
const signInUseCase = new SignInUseCase(userRepository);
const signInController = new SignInController(signInUseCase);

export { signInController };
