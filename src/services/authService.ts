import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import AppError from '../helpers/appError';
import User from '../models/User';
import AuthRepository from '../repositories/authRepository';

dotenv.config();

interface IUserInstance {
    id?: number;
    roleTypeId: number;
    email: string;
    password?: string;
    passwordConfirm?: string;
    name: string;
    terms: number;
}

class UserService {
    public async authenticate(email: string, password: string): Promise<any> {
        const authRepository = getCustomRepository(AuthRepository);

        const user = await authRepository.findByEmail(email);

        if (!user) throw new AppError([{ msg: 'Usuário e/ou Senha inválidos !' }]);

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) throw new AppError([{ msg: 'Usuário e/ou Senha inválidos !' }]);

        const token = jwt.sign({ id: user.id }, (process.env.JWTSECRET as string), { expiresIn: process.env.JWTEXPIRESIN })

        return { email: user.email, token: token };
    }

    public async register(userData: IUserInstance): Promise<User> {
        const authRepository = getCustomRepository(AuthRepository);

        if (userData.terms <= 0) throw new AppError([{ msg: "O Cadastro não foi efetuado por não concordar com os termos de segurança !" }]);

        const userExists = await authRepository.findByEmail(userData.email);

        if (userExists) throw new AppError([{ msg: 'E-mail já cadastrado !' }]);

        const user = authRepository.create(userData);

        await authRepository.save(user);

        return user;
    }
}

export default new UserService();
