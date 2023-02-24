import { Router } from 'express';

//Importando controller para auth
import { adressApiController } from '../modules/auth/useCases/adressApi';
import { forgotPassController } from '../modules/auth/useCases/forgotPass';
import { signInController } from '../modules/auth/useCases/login';

const authRoute = Router();

authRoute.post('/login', async (Request, Response) => {
  const dataResponse = await signInController.handle(Request);
  const dataEnterprise = await adressApiController.handle(dataResponse.han_empresa);

  console.log('\n\nDataEnterprise: ', dataEnterprise);

  const result = {
    ...dataResponse,
    ...dataEnterprise,
  };

  console.log('\n\n ', result);

  return Response.json(result);

});

authRoute.post('/change-pass', (Request, Response) => {
  forgotPassController.handle(Request, Response);
});

export { authRoute };

