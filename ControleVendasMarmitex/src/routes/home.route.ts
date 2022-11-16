import { Router } from 'express';
import { HomeController } from './../controllers/HomeController';

const homeRoute = Router();
const homeController = new HomeController();

homeRoute.get('/api/hello', (request, response)=>{
  homeController.getApresentacao(request, response);
});

export { homeRoute };