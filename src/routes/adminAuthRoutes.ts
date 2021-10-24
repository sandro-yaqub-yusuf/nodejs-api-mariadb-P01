import { Router } from 'express';
import AdminAuthController from '../controllers/adminAuthController';
import * as AuthValidator from '../validators/authValidator';

const adminAuthRouter = Router();

adminAuthRouter.post('/login', AuthValidator.login, AdminAuthController.login);
adminAuthRouter.post('/registrar', AuthValidator.register, AdminAuthController.register);

export default adminAuthRouter;
