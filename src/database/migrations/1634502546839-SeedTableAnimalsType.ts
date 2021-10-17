import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedTableAnimalsType1634502546839 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO animals_type (id, name) VALUES
            (1, 'Cachorro'),
            (2, 'Gato');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM animals_type;`);
    }
}
