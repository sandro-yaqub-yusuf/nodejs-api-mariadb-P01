import { Router } from 'express';
import adminAuthController from '../controllers/adminAuthController';

const adminAuthRouter = Router();

adminAuthRouter.post('/login', adminAuthController.login);
adminAuthRouter.post('/registrar', adminAuthController.register);

export default adminAuthRouter;
