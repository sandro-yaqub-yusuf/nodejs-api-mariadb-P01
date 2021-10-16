import { getCustomRepository } from 'typeorm';
import { validate } from 'class-validator';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import AppError from '../helpers/appError';
import User from '../models/User';
import UserRepository from '../repositories/userRepository';

dotenv.config();

interface UserInstance {
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
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findByEmail(email);

        if (!user) throw new AppError(['Usuário e/ou Senha inválidos !']);

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) throw new AppError(['Usuário e/ou Senha inválidos !']);

        const token = jwt.sign({ id: user.id }, (process.env.JWTSECRET as string), { expiresIn: process.env.JWTEXPIRESIN })

        return { email: user.email, token: token };
    }

    public async getAll(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        const users = await userRepository.find();

        return users;
    }

    public async getById(id: number): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError(['Usuário não encontrado !']);

        return user;
    }

    public async store(userData: UserInstance): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        if (userData.password != userData.passwordConfirm) throw new AppError(['A Senhas digitadas não conferem !']);

        const userExists = await userRepository.findByEmail(userData.email);

        if (userExists) throw new AppError(['E-mail já cadastrado !']);

        const user = userRepository.create(userData);

        const errors = await validate(user);

        if (errors.length > 0) throw new AppError(errors.map(e => e.constraints as unknown as string));

        await userRepository.save(user);

        return user;
    }

    public async update(id: number, userData: UserInstance): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError(['Usuário não encontrado !']);
        
        const userExists = await userRepository.findByEmail(userData.email);

        if (userExists) throw new AppError(['E-mail já cadastrado !']);

        const userValidate = userRepository.create(userData);

        const errors = await validate(userValidate, { skipMissingProperties: true });

        if (errors.length > 0) throw new AppError(errors.map(e => e.constraints as unknown as string));

        user.roleTypeId = userData.roleTypeId;
        user.email = userData.email
        user.name = userData.name;
        user.terms = userData.terms;
        
        await userRepository.save(user);

        return user;
    }

    public async destroy(id: number): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError(['Usuário não encontrado !']);

        await userRepository.softDelete(id);
    }
}

export default new UserService();
