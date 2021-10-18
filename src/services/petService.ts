import { getCustomRepository, IsNull, Not } from 'typeorm';
import AnimalsAdoption from '../models/AnimalsAdoption';
import PetRepository from '../repositories/petRepository';

class PetService {
    public async getAll(): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 'aa.sex', 
                     'aa.note', 'aa.image', 'a.id', 'a.name', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.adopter', 'a')
            .leftJoin('aa.animalType', 'at')
            .orderBy('aa.created_at', 'DESC')
            .getMany();

        return pets;
    }

    public async getByAnimalsTypeId(animal_type_id: number): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 
                     'aa.sex', 'aa.note', 'aa.image', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.animalType', 'at')
            .where('aa.animal_type_id = :id', { id: animal_type_id })
            .andWhere('aa.adopter_id IS NULL')
            .orderBy('aa.created_at', 'DESC')
            .getMany();

        return pets;
    }

    public async getByAdopters(): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 'aa.sex', 
                     'aa.note', 'aa.image', 'a.id', 'a.name', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.adopter', 'a')
            .leftJoin('aa.animalType', 'at')
            .where('aa.adopter_id IS NOT NULL')
            .orderBy('aa.created_at', 'DESC')
            .getMany();

        return pets;
    }
}

export default new PetService();
