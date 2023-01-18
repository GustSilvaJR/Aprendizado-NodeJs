import { UserRepository } from '../../repositories/implementations/UserRepository';
import { SignInUseCase } from './SignInUseCase';
import { SignInController } from './SignInController';


const userRepository  = UserRepository.getInstance();
const signInUseCase = new SignInUseCase(userRepository);
const signInController = new SignInController(signInUseCase);

export { signInController };