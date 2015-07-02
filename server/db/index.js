'use strict';

var sqlite3 = require('sqlite3'),
    config  = require('../config'),
    db      = new sqlite3.Database(config.sqliteLocation, function(err) { if(err) { console.log(config.sqliteLocation, err);} });

// Create the users table if it doesn't exist
db.run('select * from users', function(err){
  if(err){
    db.run('CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "password" TEXT, "salt" TEXT, "nickName" TEXT, "gravatarHash" TEXT, "pregnant" BOOLEAN)');
  }
});

// create the drugs table if it doesn't exist
db.run('select * from drugs', function(err){
  if(err){
    db.run('CREATE TABLE "drugs" ("db_id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "name" TEXT, "id" TEXT, "expirationDate" TEXT)');
  }
});

module.exports = db;
