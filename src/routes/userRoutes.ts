import { Router } from 'express';
import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/listar', UserController.index);
userRouter.post('/novo', UserController.create);
userRouter.put('/editar/:id', UserController.edit);
userRouter.delete('/excluir/:id', UserController.delete);
userRouter.get('/consultar/:id', UserController.show);

export default userRouter;
