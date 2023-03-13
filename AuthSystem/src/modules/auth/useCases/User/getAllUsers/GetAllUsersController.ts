import { Request, Response } from "express";

import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
 
export class GetAllUsersController{
    private _getAllUsersUseCase:GetAllUsersUseCase;
    
    constructor(getAllUsersUseCase :GetAllUsersUseCase){
        this._getAllUsersUseCase  = getAllUsersUseCase;
    }

    async handle(request:Request,response:Response ){

        const handle_empresa =  request.query.handle_empresa?.toString();

        if(typeof handle_empresa == 'string'){
            const users = await this._getAllUsersUseCase.execute(parseInt(handle_empresa));
            
            if (users){
                return response.json(users);
            }else{
                return response.json({msg:'Nenhum usuário cadastrado no banco'});
            }
        }else{
            return response.json({msg:'Nenhum usuário cadastrado no banco'});
        }
        
    }
}