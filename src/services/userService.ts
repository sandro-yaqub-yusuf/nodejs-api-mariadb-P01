import { getCustomRepository } from 'typeorm';
import AppError from '../helpers/appError';
import User from '../models/User';
import UserRepository from '../repositories/userRepository';

interface IUserInstance {
    id?: number;
    roleTypeId: number;
    email: string;
    password?: string;
    passwordConfirm?: string;
    name: string;
    terms: number;
    image: string;
}

class UserService {
    public async getAll(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        const users = await userRepository.find();

        return users;
    }

    public async getById(id: number): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError([{ msg: 'Usuário não encontrado !' }]);

        return user;
    }

    public async store(userData: IUserInstance): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        if (userData.terms <= 0) throw new AppError([{ msg: "O Cadastro não foi efetuado por não concordar com os termos de segurança !" }]);

        const userExists = await userRepository.findByEmail(userData.email);

        if (userExists) throw new AppError([{ msg: 'E-mail já cadastrado !' }]);

        const user = userRepository.create(userData);

        await userRepository.save(user);

        return user;
    }

    public async update(id: number, userData: IUserInstance): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        if (userData.terms <= 0) throw new AppError([{ msg: "O Cadastro não foi efetuado por não concordar com os termos de segurança !" }]);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError([{ msg: 'Usuário não encontrado !' }]);
        
        const userExists = await userRepository.findByEmail(userData.email);

        if (userExists) throw new AppError([{ msg: 'E-mail já cadastrado !' }]);

        user.roleTypeId = userData.roleTypeId;
        user.email = userData.email
        user.name = userData.name;
        user.terms = userData.terms;
        user.image = userData.image;
        
        await userRepository.save(user);

        return user;
    }

    public async destroy(id: number): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(id);

        if (!user) throw new AppError([{ msg: 'Usuário não encontrado !' }]);

        await userRepository.softDelete(id);
    }
}

export default new UserService();
