module.exports = {
   "type": "mariadb",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "",
   "database": "petlovedev",
   "entities": (process.env.DEPLOY == 'DEV' ? ["src/models/**/*.ts"] : ["dist/models/**/*.js"]),
   "migrations": (process.env.DEPLOY == 'DEV' ? ["src/database/migrations/**/*.ts"] : ["dist/database/migrations/**/*.js"]),
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migrations"
   }
}
