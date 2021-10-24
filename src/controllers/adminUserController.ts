import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { unlink } from 'fs/promises';
import AppError from '../helpers/appError';
import sharp from 'sharp';
import UserService from '../services/userService';

class AdminUserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await UserService.getAll()

        return res.status(200).json(users);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const userData = req.body;
        const errors = validationResult(req);

        if (errors.isEmpty() === false) throw new AppError(errors.array());

        const user = await UserService.store(userData);

        return res.status(201).json(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const userData = req.body;
        const errors = validationResult(req);

        if (errors.isEmpty() === false) throw new AppError(errors.array());

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

    public async upload(req: Request, res: Response): Promise<Response> {
        const userFileUpload = req.file;

        if (!userFileUpload) throw new AppError([{ msg: 'Imagem inválida !' }]);
        
        sharp(userFileUpload.path)
            .resize(200, 200).toFormat('jpg')
            .toFile(`./public/uploads/images/users/${userFileUpload.filename}`).then(() => {
                unlink(userFileUpload.path).then(() => {
                    // Imagem processada com sucesso
                }).catch(error => {
                    throw new AppError([{ msg: 'Não foi possível excluir a imagem temporária !' }]);
                });
            }).catch(error => {
                throw new AppError([{ msg: 'Não foi possível processar a imagem enviada !' }]);
            });

        return res.status(201).json({ fileName: userFileUpload.filename });
    }
}

export default new AdminUserController();
