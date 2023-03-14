import { User } from "../../../entities/User";
import { UserRepository } from "../../../repositories/implementations/UserRepository";

export class GetUserByEmailUseCase{

    private _userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this._userRepository = userRepository;
    }

    async execute(email:string):Promise<User | false>{
        return await this._userRepository.getUserByEmail(email);
    }
}