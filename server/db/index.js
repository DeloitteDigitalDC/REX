'use strict';

//FIXME: SQL injection security
var sqlite3 = require('sqlite3'),
    db      = new sqlite3.Database(__dirname + '/database.sqlite3');

db.run('select * from users', function(err){
  if(err){
    db.run('CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "password" TEXT, "salt" TEXT, "nickName" TEXT, "gravatarHash" TEXT, "pregnant" BOOLEAN)');
  }
});

db.run('select * from drugs', function(err){
  if(err){
    db.run('CREATE TABLE "drugs" ("db_id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "name" TEXT, "id" TEXT, "expirationDate" TEXT)');
  }
});

module.exports = db;
