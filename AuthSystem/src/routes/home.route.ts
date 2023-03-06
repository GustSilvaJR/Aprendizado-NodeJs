import { Router } from 'express';
import { HomeController } from './../controllers/HomeController';


import { AppDataSource } from '../database';
import { User } from '../modules/auth/entities/User';

const homeRoute = Router();
const homeController = new HomeController();

homeRoute.get('/api/hello', (request, response)=>{
  homeController.getApresentacao(request, response);
});

homeRoute.get('/api/getAllUsers', async (request, response)=>{
  const users = await AppDataSource.getRepository(User).find();
  console.log(users);
  return response.json(users);
});

export { homeRoute };