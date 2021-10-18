import { Request, Response } from 'express';
import UserService from '../services/userService';

class AdminUserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await UserService.getAll()

        return res.status(200).json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const userData = req.body;

        const user = await UserService.store(userData);

        return res.status(201).json(user);
    }

    public async edit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const userData = req.body;

        const user = await UserService.update(parseInt(id), userData);

        return res.status(200).json(user);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        await UserService.destroy(parseInt(id));

        return res.status(204).json([]);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const user = await UserService.getById(parseInt(id));

        return res.status(200).json(user);
    }
}

export default new AdminUserController();
