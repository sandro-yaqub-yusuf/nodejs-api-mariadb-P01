import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedTableAnimalsAdoption1634503498941 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO animals_adoption (id, animal_type_id, adopter_id, race, name, age, color, sex, note, image, created_at, updated_at, deleted_at) VALUES
            (1, 1, NULL, 'Pastor-Alemão', 'Rex', '5 anos', 'Amarelo e Preto', 'M', 'Está com as vacinas em dia.', 'pastor-alemao-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (2, 1, NULL, 'Zwergspitz', 'Fifi', '3 anos e 5 meses', 'Amarelo', 'F', 'Está com as vacinas em dia.', 'zwergspitz-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (3, 1, NULL, 'Husky Siberiano', 'Toby', '4 anos', 'Branco e Preto', 'M', 'Está com as vacinas em dia.', 'husky-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (4, 1, NULL, 'Golden Retriever', 'Bob', '7 anos', 'Amarelo', 'M', 'Está com as vacinas em dia.', 'golden-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (5, 1, NULL, 'Poodle', 'Pituxa', '2 anos', 'Branco', 'F', 'Está com as vacinas em dia.', 'poodle-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (6, 1, 2, 'Bulldog', 'Godofredo', '6 anos', 'Branco e Amarelo', 'M', 'Está com as vacinas em dia.', 'bulldog-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (7, 2, NULL, 'Persa', 'Kyra', '3 anos', 'Amarelo', 'F', 'Está com as vacinas em dia.', 'persa-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (8, 2, NULL, 'Maine Coon', 'Sissi', '4 anos', 'Preto e Branco', 'M', 'Está com as vacinas em dia.', 'mainecoon-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (9, 2, 1, 'Bengal', 'Mila', '2 anos', 'Branco, Preto e Amarelo', 'F', 'Está com as vacinas em dia.', 'bengal-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (10, 2, NULL, 'Siamês', 'Princesa', '4 anos e 3 meses', 'Amarelo e Preto', 'M', 'Está com as vacinas em dia.', 'siames-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (11, 2, NULL, 'Sphynx', 'Jinx', '5 anos', 'Branco', 'M', 'Está com as vacinas em dia.', 'sphynx-1631486190662.jpg', '2021-10-01 13:19:55.000000', NULL, NULL),
            (12, 2, NULL, 'Angorá', 'Nina', '2 anos', 'Branco', 'F', 'Está com as vacinas em dia.', 'Angora-1633292904344.jpg', '2021-10-01 13:19:55.000000', NULL, NULL);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM animals_adoption;`);
    }
}
