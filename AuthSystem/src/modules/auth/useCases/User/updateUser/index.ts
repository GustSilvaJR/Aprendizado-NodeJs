import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const userRepository = UserRepository.getInstance();
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
