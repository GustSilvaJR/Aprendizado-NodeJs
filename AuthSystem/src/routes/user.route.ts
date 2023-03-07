import { Router } from 'express';

//Importando controlador para user
import { createUserController } from '../modules/auth/useCases/User/createUser';
import { updateUserController } from '../modules/auth/useCases/User/updateUser';
import { getAllUsersController } from '../modules/auth/useCases/User/getAllUsers';

const userRoute = Router();

//Criar novo usuario
userRoute.post('/api/user/createUser', async (Request, Response) => {
  await createUserController.handle(Request, Response);
});

//Alterar algum usuário
userRoute.put('/api/user/updateUser', async (Request, Response) => {
  await updateUserController.handle(Request, Response);
});

//Selecionar todos os usuários
userRoute.get('/api/user/getAllUsers', async (Request, Response) => {
  await getAllUsersController.handle(Request, Response);
})

export { userRoute };