import { Request, Response } from 'express';
import PetService from '../services/petService';

class SiteHomeController {
    public async index(req: Request, res: Response): Promise<Response> {
        const pets = await PetService.getAll()

        return res.status(200).json(pets);
    }
}

export default new SiteHomeController();
