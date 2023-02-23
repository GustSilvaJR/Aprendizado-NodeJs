import { Router } from 'express';

//Importando controller para auth
import { signInController } from '../modules/auth/useCases/login';
import { forgotPassController } from '../modules/auth/useCases/forgotPass';
import { adressApiController } from '../modules/auth/useCases/adressApi';

const authRoute = Router();

authRoute.post('/login', async (Request, Response) => {
  const dataResponse = await signInController.handle(Request);

  dataResponse.adress = adressApiController.handle(dataResponse.);

});

authRoute.post('/change-pass', (Request, Response) => {
  forgotPassController.handle(Request, Response);
});

export { authRoute };