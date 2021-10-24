import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTableRolesType1634485926342 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS roles_type (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                name varchar(50) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS roles_type;`);
    }
}
