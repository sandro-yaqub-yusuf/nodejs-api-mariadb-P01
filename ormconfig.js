module.exports = {
   "type": "mariadb",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "",
   "database": "petlovedev",
   "entities": (process.env.DEPLOY == 'DEV' ? ["src/models/**/*.ts"] : ["dist/models/**/*.js"]),
   "cli": {
      "entitiesDir": "src/models"
   }
}
