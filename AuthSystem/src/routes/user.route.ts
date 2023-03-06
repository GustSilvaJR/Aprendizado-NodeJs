import { Router } from 'express';

//Importando controlador para user
import { createUserController } from '../modules/auth/useCases/User/createUser';

const userRoute = Router();

userRoute.post('/api/user/createUser', async (Request, Response) => {
  await createUserController.handle(Request, Response);
});

export { userRoute };