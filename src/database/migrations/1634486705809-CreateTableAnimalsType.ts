import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTableAnimalsType1634486705809 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS animals_type (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                name varchar(20) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS animals_type;`);
    }
}
