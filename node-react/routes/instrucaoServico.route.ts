import { request, response, Router } from "express";
import { InstrucaoServicoController } from "../controllers/instrucaoServicoController";

const instrucaoServico = new InstrucaoServicoController();
const instrucaoServicoRouter = Router();

instrucaoServicoRouter.get("/instrucaoServico", (request, response) => {
    instrucaoServico.getInstrucaoServico(request, response);
});

instrucaoServicoRouter.get("/instrucaoServicoReal", (request, response) => {
    const { codigoFilial } = request.query;

    instrucaoServico.getInstrucaoServicoReal(request, response, String(codigoFilial));
})

export { instrucaoServicoRouter };