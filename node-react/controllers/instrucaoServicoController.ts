import { Request, Response } from 'express';

class InstrucaoServicoController{   
    getInstrucaoServico(request:Request, response:Response){
        return response.send({express:"Estou sendo enviado pelo controlador"});
    }

    getInstrucaoServicoReal(request:Request, response:Response, codFilial:string){
        fetch("http://195.1.1.110:53010/api/armazem/is/aberta?codigoFilial=8")
            .then((response:any) => response.json())
            .then((data:any) =>{
                return response.send({express:data})
            })
            .catch((error:any)=>{
                return response.send({express:"Erro: "+error});
            });
    }
}
export { InstrucaoServicoController };