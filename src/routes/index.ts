import { Router } from 'express';
import adminAuthRouter from './adminAuthRoutes';
import adminUserRouter from './adminUserRoutes';
import siteHomeRouter from './siteHomeRoutes';
import authMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.use('/api/v1/admin', adminAuthRouter);
routes.use('/api/v1/admin/usuario', authMiddleware, adminUserRouter);
routes.use('/api/v1', siteHomeRouter);

export default routes;
