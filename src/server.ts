import 'express-async-errors';
import 'reflect-metadata';
import AppError from './helpers/appError';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import './database';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            error: error.message,
        });
    }

    return res.status(500).json({
        error: 'Internal server error',
    });
});

server.listen(process.env.PORT, () => {
    console.log('Servidor NodeJS rodando na porta ' + process.env.PORT);
});
