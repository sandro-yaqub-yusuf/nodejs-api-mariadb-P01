import { Router } from 'express';
import adminUserController from '../controllers/adminUserController';

const adminUserRouter = Router();

adminUserRouter.get('/listar', adminUserController.index);
adminUserRouter.post('/novo', adminUserController.create);
adminUserRouter.put('/editar/:id', adminUserController.edit);
adminUserRouter.delete('/excluir/:id', adminUserController.delete);
adminUserRouter.get('/consultar/:id', adminUserController.show);

export default adminUserRouter;
