import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTableAdopters1634486821778 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS adopters (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                name varchar(100) NOT NULL,
                rg varchar(10) DEFAULT NULL,
                cpf varchar(11) DEFAULT NULL,
                address varchar(255) DEFAULT NULL,
                number varchar(20) DEFAULT NULL,
                district varchar(100) DEFAULT NULL,
                city varchar(100) DEFAULT NULL,
                state varchar(2) DEFAULT NULL,
                postcode varchar(8) DEFAULT NULL,
                phone varchar(11) DEFAULT NULL,
                email varchar(100) DEFAULT NULL,
                created_at datetime(6) NOT NULL DEFAULT current_timestamp(6),
                updated_at datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
                deleted_at datetime(6) DEFAULT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS adopters;`);
    }
}
