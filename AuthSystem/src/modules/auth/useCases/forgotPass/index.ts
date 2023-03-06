import { UserRepository } from '../../repositories/implementations/UserRepository';
import { ForgotPassUseCase } from './ForgotPassUseCase';
import { ForgotPassController } from './ForgotPassController';




const userRepository = UserRepository.getInstance();
const forgotPassUseCase = new ForgotPassUseCase(userRepository);
const forgotPassController = new ForgotPassController(forgotPassUseCase);

export { forgotPassController };