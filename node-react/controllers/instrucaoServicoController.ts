import { Request, Response } from 'express';
import fetch, { Body } from 'node-fetch';


class InstrucaoServicoController{   
    getInstrucaoServico(request:Request, response:Response){
        return response.send({express:"Estou sendo enviado pelo controlador"});
    }

    getInstrucaoServicoReal(request:Request, response:Response, codFilial:string){
        const data = {
            codigoFilial:codFilial
        };

        const meta = {
            method: 'get',
            headers:{
                'Authorization':'Basic '+btoa('usuario:senha'),
                'Content-Type': 'application/json'
            },
        }

        fetch("http://195.1.1.110:53010/api/armazem/is/aberta?" + new URLSearchParams(data), meta)
            .then((response:any) => response.json())
            .then((data:string) =>{
                console.log(JSON.stringify({express:data}));
                return response.send(JSON.stringify({express:data}));
            })
            .catch((error:any)=>{
                return response.send({express:"Erro: "+error});
            });
    }
}
export { InstrucaoServicoController };