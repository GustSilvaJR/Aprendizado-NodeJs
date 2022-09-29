import { SpecificationRepository } from "../../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const specificationCreateUseCase = new CreateSpecificationUseCase(specificationRepository);
const specificationCreateController = new CreateSpecificationController(specificationCreateUseCase);

export { specificationCreateController };