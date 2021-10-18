import { Router } from 'express';
import adminAuthRouter from './adminAuthRoutes';
import adminUserRouter from './adminUserRoutes';
import siteHomeRouter from './siteHomeRoutes';
import authMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.use('/admin', adminAuthRouter);
routes.use('/admin/usuario', authMiddleware, adminUserRouter);
routes.use('/', siteHomeRouter);

export default routes;
