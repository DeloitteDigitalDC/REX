module.exports = (function() {
  //DC Created with: CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "password" TEXT, "salt" TEXT);
  //Drugs table Created with: CREATE TABLE "drugs" ("db_id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "name" TEXT, "id" TEXT);

  var sqlite3 = require('sqlite3'),
      db      = new sqlite3.Database('./server/db/database.sqlite3');

  return db;
})();
