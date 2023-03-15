import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { IUserUpdateDTO } from "../../../interfaces/IUserUpdateDTO";


export class UpdateUserController {
    private _updateUserUseCase:UpdateUserUseCase;

    constructor (updateUserUseCase:UpdateUserUseCase){
        this._updateUserUseCase = updateUserUseCase;
    }

    async handle(request:Request, response:Response){
        const {nome_usuario, nome_email, senha, flg_status, flg_tipo_usuario, email_original} = request.body;

        const dataUpdate:IUserUpdateDTO = {
            nom_usuario: nome_usuario,
            nom_email: nome_email,
            nom_senha: senha, 
            flg_status, 
            flg_tipo_usuario, 
            email_original,
        }

        const result = await this._updateUserUseCase.execute(dataUpdate);

        console.log(result)

        return response.json(result);

    }

}