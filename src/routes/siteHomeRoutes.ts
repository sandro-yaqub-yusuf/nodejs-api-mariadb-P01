import { Router } from 'express';
import siteHomeController from '../controllers/siteHomeController';

const siteHomeRouter = Router();

siteHomeRouter.get('/', siteHomeController.index);

export default siteHomeRouter;
