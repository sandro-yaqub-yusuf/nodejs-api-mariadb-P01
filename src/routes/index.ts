import { Router } from 'express';
import authRouter from './authRoutes';
import userRouter from './userRoutes';
import authMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.use('/admin', authRouter);
routes.use('/admin/usuario', authMiddleware, userRouter);

export default routes;
