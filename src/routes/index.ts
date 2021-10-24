import { Router } from 'express';
import AdminAuthRouter from './adminAuthRoutes';
import AdminUserRouter from './adminUserRoutes';
import SiteHomeRouter from './siteHomeRoutes';
import AuthMiddleware from '../middlewares/authMiddleware';

const routes = Router();

routes.use('/api/v1/admin', AdminAuthRouter);
routes.use('/api/v1/admin/usuario', AuthMiddleware, AdminUserRouter);
routes.use('/api/v1', SiteHomeRouter);

export default routes;
