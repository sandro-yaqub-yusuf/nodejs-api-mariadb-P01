import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTablePages1634487518953 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS pages (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                title varchar(50) NOT NULL,
                content text DEFAULT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS pages;`);
    }
}
