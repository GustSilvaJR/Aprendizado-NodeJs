import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { IUserUpdateDTO } from "../../../repositories/IUserRepository";

export class UpdateUserController {
    private _updateUserUseCase:UpdateUserUseCase;

    constructor (updateUserUseCase:UpdateUserUseCase){
        this._updateUserUseCase = updateUserUseCase;
    }

    async handle(request:Request, response:Response){
        const {nom_usuario, nom_email, nom_senha, flg_status, flg_tipo_usuario, han_empresa} = request.body;

        const dataUpdate:IUserUpdateDTO = {
            nom_usuario,
            nom_email,
            nom_senha, 
            flg_status, 
            flg_tipo_usuario, 
            han_empresa,
        }

        const result = await this._updateUserUseCase.execute(dataUpdate);

        return response.json(result);

    }

}