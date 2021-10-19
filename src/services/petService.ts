import { getCustomRepository, IsNull, Not } from 'typeorm';
import AnimalsAdoption from '../models/AnimalsAdoption';
import PetRepository from '../repositories/petRepository';

class PetService {
    public async getAll(): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.findAll();

        return pets;
    }

    public async getByAnimalsTypeId(animal_type_id: number): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.findByAnimalsTypeId(animal_type_id);

        return pets;
    }

    public async getByAdopters(): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.findByAdopters();

        return pets;
    }

    public async getById(id: number): Promise<AnimalsAdoption | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pet = await petRepository.findById(id);

        return pet;
    }
    
    public async getByRace(race: string): Promise<AnimalsAdoption[] | unknown> {
        const petRepository = getCustomRepository(PetRepository);

        const pets = await petRepository.findByRace(race)

        return pets;
    }
}

export default new PetService();
