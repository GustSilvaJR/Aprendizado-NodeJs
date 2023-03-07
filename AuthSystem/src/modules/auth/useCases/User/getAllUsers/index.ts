import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const userRepository = UserRepository.getInstance();
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export {getAllUsersController};