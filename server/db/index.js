'use strict';

//todo: no need for self calling function
module.exports = (function() {

  //DC Created with: CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "password" TEXT, "salt" TEXT, "nickName" TEXT, "gravatarHash" TEXT, "pregnant" BOOLEAN);
  //Drugs table Created with: CREATE TABLE "drugs" ("db_id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "name" TEXT, "id" TEXT);

  //FIXME: SQL injection security
  var sqlite3 = require('sqlite3'),
      db      = new sqlite3.Database('./server/db/database.sqlite3');

  return db;
})();
