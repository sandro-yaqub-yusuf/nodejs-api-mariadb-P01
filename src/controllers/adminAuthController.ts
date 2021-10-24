import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import AppError from '../helpers/appError';
import AuthService from '../services/authService';

class AdminAuthController {
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const errors = validationResult(req);

        if (errors.isEmpty() === false) throw new AppError(errors.array());

        const user = await AuthService.authenticate(email, password);

        return res.status(200).json(user);
    }

    public async register(req: Request, res: Response): Promise<Response> {
        const userData = req.body;
        const errors = validationResult(req);

        if (errors.isEmpty() === false) throw new AppError(errors.array());

        const user = await AuthService.register(userData);

        return res.status(201).json(user);
    }
}

export default new AdminAuthController();
