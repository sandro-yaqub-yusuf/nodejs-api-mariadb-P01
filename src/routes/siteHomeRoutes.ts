import { Router } from 'express';
import siteHomeController from '../controllers/siteHomeController';

const siteHomeRouter = Router();

siteHomeRouter.get('/listar', siteHomeController.index);
siteHomeRouter.get('/listar/tipo-animal/:id', siteHomeController.getByAnimalsType);
siteHomeRouter.get('/listar/adotados', siteHomeController.getByAdopters);

export default siteHomeRouter;
