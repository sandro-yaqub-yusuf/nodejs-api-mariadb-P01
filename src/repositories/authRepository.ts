import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
export default class AuthRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = this.findOne({
            where: { email }
        });

        return user;
    }
}
