import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateForeignKeyTableAnimalsAdoption1634487816358 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE animals_adoption 
            ADD CONSTRAINT fk1_animals_adoption_adopter_id_foreign FOREIGN KEY (adopter_id) 
            REFERENCES adopters (id);
        `);

        await queryRunner.query(`
            ALTER TABLE animals_adoption 
            ADD CONSTRAINT fk2_animals_adoption_animal_type_id_foreign FOREIGN KEY (animal_type_id) 
            REFERENCES animals_type (id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE animals_adoption DROP FOREIGN KEY fk2_animals_adoption_animal_type_id_foreign;`);
        await queryRunner.query(`ALTER TABLE animals_adoption DROP FOREIGN KEY fk1_animals_adoption_adopter_id_foreign;`);
    }
}
