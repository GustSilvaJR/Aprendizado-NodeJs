import { UserRepository } from '../../../repositories/implementations/UserRepository';
import { ForgotPassController } from './ForgotPassController';
import { ForgotPassUseCase } from './ForgotPassUseCase';




const userRepository = UserRepository.getInstance();
const forgotPassUseCase = new ForgotPassUseCase(userRepository);
const forgotPassController = new ForgotPassController(forgotPassUseCase);

export { forgotPassController };
