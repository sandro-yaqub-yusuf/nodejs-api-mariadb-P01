import {MigrationInterface, QueryRunner} from 'typeorm';

export class SeedTableRolesType1634502923765 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO roles_type (id, name) VALUES
            (1, 'Administrador'),
            (2, 'Operador'),
            (3, 'Somente Consulta');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM roles_type;`);
    }
}
