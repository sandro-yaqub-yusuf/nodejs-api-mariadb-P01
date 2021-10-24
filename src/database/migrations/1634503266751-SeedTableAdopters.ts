import {MigrationInterface, QueryRunner} from 'typeorm';

export class SeedTableAdopters1634503266751 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO adopters (id, name, rg, cpf, address, number, district, city, state, postcode, phone, email, created_at, updated_at, deleted_at) VALUES
            (1, 'Pedro de Oliveira', '183646472', '23844000020', 'Avenida Francisco Conde', '101', 'Vila Rosália', 'Guarulhos', 'SP', '07070010', '11938474756', 'pedro@teste.com', '2021-10-01 21:49:21.000000', NULL, NULL),
            (2, 'Adriana Gonçalvez', '208857478', '12510357018', 'Rua Soldado José Fernandes da Silva', '201', 'Vila Rosália', 'Guarulhos', 'SP', '07070020', '1124518754', 'adriana@teste.com', '2021-10-01 21:50:10.000000', NULL, NULL);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM adopters;`);
    }
}
