import { Request, Response } from 'express';
import UserService from '../services/userService';

class AuthController {
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const userLogin = await UserService.authenticate(email, password);

        return res.status(200).json(userLogin);
    }

    public async register(req: Request, res: Response): Promise<Response> {
        const userData = req.body;

        const user = await UserService.store(userData);

        return res.status(201).json(user);
    }
}

export default new AuthController();
