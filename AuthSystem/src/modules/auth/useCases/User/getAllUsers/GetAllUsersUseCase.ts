import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class GetAllUsersUseCase{
    
    private _userRepository:IUserRepository;

    constructor(userRepository:IUserRepository){
        this._userRepository = userRepository;
    }

    async execute(handle_enterprise: number):Promise<User[] | false>{
        return await this._userRepository.getAllUsers(handle_enterprise);
    }
}