import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController{
    private _deleteUserUseCase:DeleteUserUseCase;

    constructor(deleteUserUseCase:DeleteUserUseCase){
        this._deleteUserUseCase = deleteUserUseCase;
    }

    async handle(request:Request, response:Response){
        const {email} = request.body;

        const result = await this._deleteUserUseCase.execute(email);

        return result ? response.json({userDeleted:true}) : response.json({userDeleted:false});
    }
}