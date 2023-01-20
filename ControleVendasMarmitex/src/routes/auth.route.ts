import { Router } from 'express';

//Importando controller para auth
import { signInController } from '../modules/auth/useCases/login';
import { forgotPassController } from '../modules/auth/useCases/forgotPass';

const authRoute = Router();

authRoute.post('/login', (Request, Response) => {
  signInController.handle(Request, Response);
});

authRoute.post('/change-pass', (Request, Response) => {
  forgotPassController.handle(Request, Response);
});

export { authRoute };