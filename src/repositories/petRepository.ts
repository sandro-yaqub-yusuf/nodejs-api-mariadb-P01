import { EntityRepository, Repository } from 'typeorm';
import AnimalsAdoption from '../models/AnimalsAdoption';

@EntityRepository(AnimalsAdoption)
export default class PetRepository extends Repository<AnimalsAdoption> {
    public async findAll(): Promise<AnimalsAdoption[] | unknown> {
        const pets = await this.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 'aa.sex', 
                     'aa.note', 'aa.image', 'a.id', 'a.name', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.adopter', 'a')
            .leftJoin('aa.animalType', 'at')
            .orderBy('aa.created_at', 'DESC')
            .getMany();

        return pets;
    }

    public async findByAdopters(): Promise<AnimalsAdoption[] | unknown> {
        const pets = await this.createQueryBuilder()
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

    public async findByAnimalsTypeId(animal_type_id: number): Promise<AnimalsAdoption[] | unknown> {
        const pets = await this.createQueryBuilder()
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

    public async findById(id: number): Promise<AnimalsAdoption | unknown> {
        const pet = await this.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 'aa.sex', 
                     'aa.note', 'aa.image', 'a.id', 'a.name', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.adopter', 'a')
            .leftJoin('aa.animalType', 'at')
            .where('aa.id = :id', { id: id })
            .getOne()

        return pet;
    }

    public async findByRace(race: string): Promise<AnimalsAdoption[] | unknown> {
        const pets = await this.createQueryBuilder()
            .select(['aa.id', 'aa.race', 'aa.name', 'aa.age', 'aa.color', 'aa.sex', 
                     'aa.note', 'aa.image', 'a.id', 'a.name', 'at.id', 'at.name'])
            .from('AnimalsAdoption', 'aa')
            .leftJoin('aa.adopter', 'a')
            .leftJoin('aa.animalType', 'at')
            .where('aa.race like :race', { race: `%${race}%` })
            .orderBy('aa.created_at', 'DESC')
            .getMany();

        return pets;
    }
}
