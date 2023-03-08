import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const userRepository = UserRepository.getInstance();
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };