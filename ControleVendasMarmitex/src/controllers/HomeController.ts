import { Request, Response } from 'express';

class HomeController {
  getApresentacao(request:Request, response:Response) {
    return response.send({ express:'Hello World!' });
  }
}

export { HomeController };