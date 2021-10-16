import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = this.findOne({
            where: { email }
        });

        return user;
    }

    public async findByName(name: string): Promise<User | undefined> {
        const user = this.findOne({
            where: { name }
        });

        return user;
    }
}
