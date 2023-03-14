import { Request, Response } from "express";
import { GetUserByEmailUseCase } from "./getUserByEmailUseCase";


export class GetUserByEmailController{
    
    private _getUserByEmailUseCase: GetUserByEmailUseCase;

    constructor(getUserByEmailUseCase: GetUserByEmailUseCase ){
        this._getUserByEmailUseCase = getUserByEmailUseCase;
    }

    async handle(request:Request, response:Response){
        const{ email } = request.body;

        const user = await this._getUserByEmailUseCase.execute(email);

        if(user){
            const userResponse = {
                nome_usuario: user.NOM_USUARIO,
                nome_email: user.NOM_EMAIL,
                flg_status: user.FLG_STATUS,
                flg_tipo_usuario: user.FLG_TIPO_USUARIO,
            }

            return response.json(userResponse);
        }else{
            return response.json({msg:"Não foi possível encontrar nenhum usuário associado a este e-mail.", resp:false})
        }
    }

}