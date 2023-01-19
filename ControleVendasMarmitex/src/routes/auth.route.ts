import { Router } from 'express';

//Importando controller para auth
import { signInController } from '../modules/auth/useCases/login';

const authRoute = Router();

authRoute.post('/login', (Request, Response) => {
  signInController.handle(Request, Response);
});

export { authRoute };