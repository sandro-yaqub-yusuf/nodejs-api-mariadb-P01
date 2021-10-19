import { Router } from 'express';
import siteHomeController from '../controllers/siteHomeController';

const siteHomeRouter = Router();

siteHomeRouter.get('/listar', siteHomeController.index);
siteHomeRouter.get('/listar/tipo-animal/:id', siteHomeController.getByAnimalsType);
siteHomeRouter.get('/listar/adotados', siteHomeController.getByAdopters);
siteHomeRouter.get('/pesquisar', siteHomeController.getByRace);
siteHomeRouter.get('/perfil/:id', siteHomeController.getById);
siteHomeRouter.get('/pagina/:id', siteHomeController.getByPage);

export default siteHomeRouter;
