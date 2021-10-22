# NodeJS com TYPESCRIPT, API RestFul e Banco de Dados SQLITE3 - Projeto 01

* Linguagem principal: Typescript
* Outras linguagens: Javascript
* Frameworks utilizadas: TYPESCRIPT, NODEMON, TS-NODE, TS-NODE-DEV, EXPRESS, EXPRESS-ASYNC-ERRORS, TYPEORM, REFLECT-METADATA, CLASS-VALIDATOR, MYSQL2, MULTER, SHARP, BCRYPTJS, CORS, JSONWEBTOKEN, PATH e DOTENV
* Banco de Dados utilizado: MariaDB versão 10.5.8
* Editor utilizado: Visual Studio Code
* Informações extras: Necessita conhecimentos médios NodeJS, Javascript e Typescript

----

## Descrição:

Pequeno projeto em NODEJS (API RestFul) com BD MariaDB para simular um back-end de um sistema de Adoção de Animais.

----

## Instalação Global dos pacotes para o NODEJS:

1. Instalar o NODEJS (última versão LTS) do site oficial (https://nodejs.org)
2. Instalar a linguagem TYPESCRIP, utilize o seguinte comando: 
   npm install -g typescript
3. Instalar a biblioteca NODEMON, utilize o seguinte comando: 
   npm install -g nodemon
4. Instalar a biblioteca TS-NODE, utilize o seguinte comando: 
   npm install -g ts-node
5. Instalar a biblioteca TYPEORM, utilize o seguinte comando: 
   npm install -g typeorm

----

## Instalação direta dos pacotes para o NODEJS:

1. Caso você tenha instalado as bibliotecas globais, rode o seguinte comando na pasta do projeto:
   npm install

----

## Instalação na pasta do projeto (caso queira instalar as bibliotecas do projeto individualmente) dos pacotes para o NODEJS:

01. Instalar a biblioteca extra ao TYPESCRIPT no NODEJS: 
    npm install --save-dev @types/node
02. Instalar a biblioteca extra ao TS-NODE-DEV no NODEJS: 
    npm install --save-dev @types/ts-node-dev
03. Instalar a biblioteca EXPRESS para NODEJS: 
    npm install express
04. Instalar a biblioteca extra ao EXPRESS no NODEJS: 
    npm install --save-dev @types/express
05. Instalar a biblioteca EXPRESS-ASYNC-ERRORS para NODEJS: 
    npm install express-async-errors
06. Instalar a biblioteca TYPEORM para NODEJS: 
    npm install typeorm
07. Instalar a biblioteca REFLECT-METADATA para NODEJS: 
    npm install reflect-metadata
08. Instalar a biblioteca CLASS-VALIDATOR para NODEJS: 
    npm install class-validator
09. Instalar a biblioteca MYSQL2 para NODEJS: 
    npm install mysql2
10. Instalar a biblioteca MULTER para NODEJS: 
    npm install multer
11. Instalar a biblioteca extra ao MULTER para NODEJS: 
    npm install --save-dev @types/multer
12. Instalar a biblioteca SHARP para NODEJS: 
    npm install sharp
13. Instalar a biblioteca extra ao SHARP para NODEJS: 
    npm install --save-dev @types/sharp
14. Instalar a biblioteca BCRYPTJS para NODEJS: 
    npm install bcryptjs
15. Instalar a biblioteca extra ao BCRYPTJS para NODEJS: 
    npm install --save-dev @types/bcryptjs
16. Instalar a biblioteca CORS para NODEJS: 
    npm install cors
17. Instalar a biblioteca extra ao CORS para NODEJS: 
    npm install --save-dev @types/cors
18. Instalar a biblioteca JSONWEBTOKEN para NODEJS: 
    npm install jsonwebtoken
19. Instalar a biblioteca extra ao JSONWEBTOKEN para NODEJS: 
    npm install --save-dev @types/jsonwebtoken
20. Instalar a biblioteca PATH no NODEJS: 
    npm install path
21. Instalar a biblioteca DOTENV para NODEJS: 
    npm install dotenv

----

## Banco de Dados:

1. Criar um banco de dados com o nome de "petlovedev" com o COLLATE "utf8_general_ci"
2. Existem 2 formas de criar as tabelas e seus respectivos dados
3. Se você instalou todas as bibliotecas do NODE JS, rode o seguinte comando para criar as tabelas e dados:
   npm run typeorm migration:run
4. Ou, utilizando um software de acesso ao BD, rode o script "ScriptDB.sql" para criar as tabelas e dados

----

## Para rodar o projeto:

1. Crie o arquivo ".env" a partir do arquivo ".env-example" e preencha os dados solicitados
2. Abra um terminal ou prompt de comando na pasta do projeto e digite:
   npm run start-dev
3. Utilize algum software de teste de APIs como POSTMAN ou INSOMMNIA utilizando a URL:
   http://localhost:5001

----

## Sobre o Autor:

SANDRO YAQUB YUSUF - Analista & Programador Sênior FULL-STACK - Trabalha com desenvolvimento de softwares desde 1990, passando pelas linguagens COBOL, CLIPPER, VISUAL BASIC 6, ASP Clássico, ASP.NET Framework, ASP.NET Core, PHP (Laravel) e NodeJS. Possui conhecimentos em banco de dados como SQL-SERVER, ORACLE, MySQL, MariaDB, MongoDB e SQLite. Também possui conhecimentos em HTML5, CSS3, TYPESCRIPT e JAVASCRIPT. Para as frameworks de desenvolvimento de FRONT-END, possui conhecimentos em ANGULAR, VUEJS e REACT JS. Pratica o modelo CLEAN ARCHITECTURE usando os conhecimentos em DDD, SOLID e TDD.
