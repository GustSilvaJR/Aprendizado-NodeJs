import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';


class CreateSpecificationController{
    private _createSpecificationUseCase;

    constructor(createSpecificationUseCase:CreateSpecificationUseCase){
        this._createSpecificationUseCase = createSpecificationUseCase;
    }

    handle(request:Request, response:Response){
        const { name, description } = request.body;
        this._createSpecificationUseCase.execute({name, description});

        return response.status(201).send();
    }
}
export { CreateSpecificationController };