import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateForeignKeyTableUsers1634487796660 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users 
            ADD CONSTRAINT fk1_users_role_type_id_foreign FOREIGN KEY (role_type_id) 
            REFERENCES roles_type (id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE users DROP FOREIGN KEY fk1_users_role_type_id_foreign;`);
    }
}
