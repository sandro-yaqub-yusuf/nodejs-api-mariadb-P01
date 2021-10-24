import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTableUsers1634485029657 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS users (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                role_type_id int(10) unsigned NOT NULL DEFAULT 3,
                email varchar(100) NOT NULL,
                password varchar(255) NOT NULL,
                name varchar(100) NOT NULL,
                terms tinyint(4) NOT NULL,
                image varchar(255) NULL,
                reset_password varchar(255) DEFAULT NULL,
                created_at datetime(6) NOT NULL DEFAULT current_timestamp(6),
                updated_at datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
                deleted_at datetime(6) DEFAULT NULL,
                PRIMARY KEY (id) USING BTREE,
                KEY idx1_users_role_type_id_foreign (role_type_id) USING BTREE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS users;`);
    }
}
