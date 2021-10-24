import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateTableAnimalsAdoption1634487102673 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS animals_adoption (
                id int(10) unsigned NOT NULL AUTO_INCREMENT,
                animal_type_id int(10) unsigned DEFAULT NULL,
                adopter_id int(10) unsigned DEFAULT NULL,
                race varchar(50) NOT NULL,
                name varchar(50) NOT NULL,
                age varchar(25) NOT NULL,
                color varchar(50) NOT NULL,
                sex varchar(1) NOT NULL,
                note text DEFAULT NULL,
                image varchar(255) NULL,
                created_at datetime(6) NOT NULL DEFAULT current_timestamp(6),
                updated_at datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
                deleted_at datetime(6) DEFAULT NULL,
                PRIMARY KEY (id),
                KEY idx1_animals_adoption_adopter_id_foreign (adopter_id),
                KEY idx2_animals_adoption_animal_type_id_foreign (animal_type_id) USING BTREE              
            ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS animals_adoption;`);
    }
}
