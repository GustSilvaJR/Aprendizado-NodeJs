import { IUserUpdateDTO } from "../../../interfaces/IUserUpdateDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class UpdateUserUseCase {

    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this._userRepository = userRepository;
    }

    execute(dataUpdate:IUserUpdateDTO):Promise<boolean>{
        return this._userRepository.updateUser(dataUpdate, dataUpdate.nom_email);
    }

}