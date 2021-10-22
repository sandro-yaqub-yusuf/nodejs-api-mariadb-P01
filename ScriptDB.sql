-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.5.8-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6343
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando estrutura para tabela petlovedev.adopters
CREATE TABLE IF NOT EXISTS `adopters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `rg` varchar(10) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `postcode` varchar(8) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.adopters: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `adopters` DISABLE KEYS */;
INSERT INTO `adopters` (`id`, `name`, `rg`, `cpf`, `address`, `number`, `district`, `city`, `state`, `postcode`, `phone`, `email`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Pedro de Oliveira', '183646472', '23844000020', 'Avenida Francisco Conde', '101', 'Vila Rosália', 'Guarulhos', 'SP', '07070010', '11938474756', 'pedro@teste.com', '2021-10-04 21:49:21.000000', NULL, NULL),
	(2, 'Adriana Gonçalvez', '208857478', '12510357018', 'Rua Soldado José Fernandes da Silva', '201', 'Vila Rosália', 'Guarulhos', 'SP', '07070020', '1124518754', 'adriana@teste.com', '2021-10-04 21:50:10.000000', NULL, NULL);
/*!40000 ALTER TABLE `adopters` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.animals_adoption
CREATE TABLE IF NOT EXISTS `animals_adoption` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `animal_type_id` int(10) unsigned DEFAULT NULL,
  `adopter_id` int(10) unsigned DEFAULT NULL,
  `race` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` varchar(25) NOT NULL,
  `color` varchar(50) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `note` text DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx1_animals_adoption_adopter_id_foreign` (`adopter_id`),
  KEY `idx2_animals_adoption_animal_type_id_foreign` (`animal_type_id`) USING BTREE,
  CONSTRAINT `fk1_animals_adoption_adopter_id_foreign` FOREIGN KEY (`adopter_id`) REFERENCES `adopters` (`id`),
  CONSTRAINT `fk2_animals_adoption_animal_type_id_foreign` FOREIGN KEY (`animal_type_id`) REFERENCES `animals_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.animals_adoption: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `animals_adoption` DISABLE KEYS */;
INSERT INTO `animals_adoption` (`id`, `animal_type_id`, `adopter_id`, `race`, `name`, `age`, `color`, `sex`, `note`, `image`, `created_at`, `updated_at`, `deleted_at`) VALUES
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
/*!40000 ALTER TABLE `animals_adoption` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.animals_type
CREATE TABLE IF NOT EXISTS `animals_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.animals_type: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `animals_type` DISABLE KEYS */;
INSERT INTO `animals_type` (`id`, `name`) VALUES
	(1, 'Cachorro'),
	(2, 'Gato');
/*!40000 ALTER TABLE `animals_type` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.migrations: ~13 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
	(1, 1634485029657, 'CreateTableUsers1634485029657'),
	(2, 1634485926342, 'CreateTableRolesType1634485926342'),
	(3, 1634486705809, 'CreateTableAnimalsType1634486705809'),
	(4, 1634486821778, 'CreateTableAdopters1634486821778'),
	(5, 1634487102673, 'CreateTableAnimalsAdoption1634487102673'),
	(6, 1634487518953, 'CreateTablePages1634487518953'),
	(7, 1634487796660, 'CreateForeignKeyTableUsers1634487796660'),
	(8, 1634487816358, 'CreateForeignKeyTableAnimalsAdoption1634487816358'),
	(9, 1634502546839, 'SeedTableAnimalsType1634502546839'),
	(10, 1634502923765, 'SeedTableRolesType1634502923765'),
	(11, 1634503084196, 'SeedTablePages1634503084196'),
	(12, 1634503266751, 'SeedTableAdopters1634503266751'),
	(13, 1634503498941, 'SeedTableAnimalsAdoption1634503498941');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.pages
CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.pages: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` (`id`, `title`, `content`) VALUES
	(1, 'Quem Somos', '<h6 style="text-align: center;"><img src="/uploads/images/image01-1024x300.jpg"></h6><br><h5><span style="font-weight: bolder;">1. The standard Lorem Ipsum passage, used since the 1500s</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><div><br></div><div><h5><span style="font-weight: bolder;">2. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">3. 1914 translation by H. Rackham</span></h5><div><br></div><div>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">4. Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><br></div><div>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</div><div><br></div></div>'),
	(2, 'Doações', '<h6 style="text-align: center;"><img src="/uploads/images/image01-1024x300.jpg"></h6><br><h5><span style="font-weight: bolder;">1. The standard Lorem Ipsum passage, used since the 1500s</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><div><br></div><div><h5><span style="font-weight: bolder;">2. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">3. 1914 translation by H. Rackham</span></h5><div><br></div><div>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">4. Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><br></div><div>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</div><div><br></div></div>'),
	(3, 'Parceiros', '<h6 style="text-align: center;"><img src="/uploads/images/image01-1024x300.jpg"></h6><br><h5><span style="font-weight: bolder;">1. The standard Lorem Ipsum passage, used since the 1500s</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><div><br></div><div><h5><span style="font-weight: bolder;">2. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">3. 1914 translation by H. Rackham</span></h5><div><br></div><div>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">4. Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><br></div><div>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</div><div><br></div></div>'),
	(4, 'Eventos', '<h6 style="text-align: center;"><img src="/uploads/images/image01-1024x300.jpg"></h6><br><h5><span style="font-weight: bolder;">1. The standard Lorem Ipsum passage, used since the 1500s</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><div><br></div><div><h5><span style="font-weight: bolder;">2. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><span style="font-weight: bolder;"><br></span></div><div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">3. 1914 translation by H. Rackham</span></h5><div><br></div><div>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</div></div><div><br></div><div><h5><span style="font-weight: bolder;">4. Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</span></h5><div><br></div><div>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</div><div><br></div></div>');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.roles_type
CREATE TABLE IF NOT EXISTS `roles_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.roles_type: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `roles_type` DISABLE KEYS */;
INSERT INTO `roles_type` (`id`, `name`) VALUES
	(1, 'Administrador'),
	(2, 'Operador'),
	(3, 'Somente Consulta');
/*!40000 ALTER TABLE `roles_type` ENABLE KEYS */;

-- Copiando estrutura para tabela petlovedev.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_type_id` int(10) unsigned NOT NULL DEFAULT 3,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `terms` tinyint(4) NOT NULL,
  `reset_password` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx1_users_role_type_id_foreign` (`role_type_id`) USING BTREE,
  CONSTRAINT `fk1_users_role_type_id_foreign` FOREIGN KEY (`role_type_id`) REFERENCES `roles_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela petlovedev.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
