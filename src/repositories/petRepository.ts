import { EntityRepository, Like, Repository } from 'typeorm';
import AnimalsAdoption from '../models/AnimalsAdoption';

@EntityRepository(AnimalsAdoption)
export default class PetRepository extends Repository<AnimalsAdoption> {
    public async findByRace(race: string): Promise<AnimalsAdoption[] | undefined> {
        const pet = this.find({
            race: Like(`%${race}%`)
        });

        return pet;
    }
}
