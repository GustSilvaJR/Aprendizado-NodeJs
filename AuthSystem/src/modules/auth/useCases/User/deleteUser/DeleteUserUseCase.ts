import { DeleteResult } from "typeorm";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase{
    private _userRepository:IUserRepository;

    constructor(userRepository:IUserRepository){
        this._userRepository = userRepository;
    }

    execute(email:string):Promise<DeleteResult>{
        return  this._userRepository.deleteUser(email);
    }
}