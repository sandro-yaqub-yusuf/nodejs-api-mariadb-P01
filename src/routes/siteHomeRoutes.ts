import { Router } from 'express';
import SiteHomeController from '../controllers/siteHomeController';

const siteHomeRouter = Router();

siteHomeRouter.get('/listar', SiteHomeController.index);
siteHomeRouter.get('/listar/tipo-animal/:id', SiteHomeController.getByAnimalsType);
siteHomeRouter.get('/listar/adotados', SiteHomeController.getByAdopters);
siteHomeRouter.get('/pesquisar', SiteHomeController.getByRace);
siteHomeRouter.get('/perfil/:id', SiteHomeController.getById);
siteHomeRouter.get('/pagina/:id', SiteHomeController.getByPage);

export default siteHomeRouter;
