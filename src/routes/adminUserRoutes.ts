import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../configs/upload';
import AdminUserController from '../controllers/adminUserController';
import * as UserValidator from '../validators/userValidator';

const adminUserRouter = Router();

const upload = multer(uploadConfig);

adminUserRouter.get('/listar', AdminUserController.index);
adminUserRouter.post('/novo', UserValidator.store, AdminUserController.store);
adminUserRouter.put('/editar/:id', UserValidator.update, AdminUserController.update);
adminUserRouter.delete('/excluir/:id', AdminUserController.delete);
adminUserRouter.get('/consultar/:id', AdminUserController.show);
adminUserRouter.patch('/upload', upload.single('image'), AdminUserController.upload);

export default adminUserRouter;
