import { Request, Response } from "express";

import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
 
export class GetAllUsersController{
    private _getAllUsersUseCase:GetAllUsersUseCase;
    
    constructor(getAllUsersUseCase :GetAllUsersUseCase){
        this._getAllUsersUseCase  = getAllUsersUseCase;
    }

    async handle(request:Request,response:Response ){
        const users = await this._getAllUsersUseCase.execute();

        if (users){
            return response.json(users);
        }else{
            return response.json({msg:'Nenhum usuário cadastrado no banco'});
        }
        
    }
}