import { Request, Response } from 'express';
import PageService from '../services/pageService';
import PetService from '../services/petService';

class SiteHomeController {
    public async index(req: Request, res: Response): Promise<Response> {
        const pets = await PetService.getAll()

        return res.status(200).json(pets);
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        const id: number = parseInt(req.params.id);

        const pet = await PetService.getById(id);

        return res.status(200).json(pet);
    }

    public async getByAnimalsType(req: Request, res: Response): Promise<Response> {
        const id: number = parseInt(req.params.id);

        const pets = await PetService.getByAnimalsTypeId(id);

        return res.status(200).json(pets);
    }

    public async getByAdopters(req: Request, res: Response): Promise<Response> {
        const pets = await PetService.getByAdopters();

        return res.status(200).json(pets);
    }

    public async getByRace(req: Request, res: Response): Promise<Response> {
        const { race } = req.query;

        const pets = await PetService.getByRace(race as string);

        return res.status(200).json(pets);
    }

    public async getByPage(req: Request, res: Response): Promise<Response> {
        const id: number = parseInt(req.params.id);

        const page = await PageService.getByPage(id);

        return res.status(200).json(page);
    }
}

export default new SiteHomeController();
