import { getCustomRepository } from 'typeorm';
import AnimalsAdoption from '../models/AnimalsAdoption';
import PetRepository from '../repositories/petRepository';

class PetService {
    public async getAll(): Promise<AnimalsAdoption[] | unknown[]> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.createQueryBuilder()
        .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 
                 'aa.color', 'aa.sex', 'aa.note', 'aa.image',
                 'a.id', 'a.name', 'at.id', 'at.name'])
        .from('AnimalsAdoption', 'aa')
        .leftJoin('aa.adopter', 'a')
        .leftJoin('aa.animalType', 'at')
        .getMany();

        return pets;
    }
}

export default new PetService();
