import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import AppError from '../helpers/appError';

dotenv.config();

interface ITokenPayload {
    id: number;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError(['Usuário não autorizado !']);
    
    const token = authorization.substr(7);

    try {
        const data = jwt.verify(token, (process.env.JWTSECRET as string));

        const { id } = data as ITokenPayload;

        req.userId = id;

        return next();
    } 
    catch (error) {
        throw new AppError(['Usuário não autorizado !']);
    }
}
