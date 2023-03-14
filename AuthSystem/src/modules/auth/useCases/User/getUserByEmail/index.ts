import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { GetUserByEmailController } from "./GetUserByEmailController";
import { GetUserByEmailUseCase } from "./getUserByEmailUseCase";

const userRepository: UserRepository = UserRepository.getInstance();
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);
const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase);

export { getUserByEmailController };