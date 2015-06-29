'use strict';

module.exports = function (app) {
  var session       = require('express-session'),
      FileStore     = require('session-file-store')(session),
      passport      = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt        = require('bcrypt'),
      sqlite3       = require('sqlite3'),
      //TODO: create table if does not exist yet
      //DC Created with: CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "password" TEXT, "salt" TEXT);
      //Drugs table Created with: CREATE TABLE "drugs" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "username" TEXT, "name" TEXT, "application_id" TEXT);
      db            = new sqlite3.Database('./server/auth/database.sqlite3');

//Session Storage
  app.use(session({
    store            : new FileStore({
      path: './server/auth/sessions'  //Might want to move this somewhere else or use MemoryStore
    }),
    secret           : 'f14b78ecf1cc7e0979d4fd757d7bb68ec27b2a86', //change this for PROD
    resave           : false,
    saveUninitialized: false,
    cookie           : {
      maxAge  : 60000,
      httpOnly: false
    }
  }));

//Authentication
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(function (username, password, done) {
    db.get('SELECT id, username, password FROM users WHERE username = ?', username, function (err, row) {
      if (!row) return done(null, false); //TODO: user doesnt exist! Send message saying not found
      // Load hash from your password DB.
      bcrypt.compare(password, row.password, function (err, res) {
        if (res) {
          return done(null, row);
        } else {
          return done(null, false, {message: 'Incorrect password.'});
        }
      });
    });
  }));

  passport.serializeUser(function (user, done) {
    return done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    db.get('SELECT id, username FROM users WHERE id = ?', id, function (err, row) {
      if (!row) return done(null, false);
      return done(null, row);
    });
  });

  //Login Route
  app.post('/user/login', passport.authenticate('local'), function (req, res) {
    console.log('in new auth - login');
    console.log(req.body.username);
    res.status(200).send(req.body.username);
  });

  app.delete('/user/logout', function (req, res) {
    console.log('logout');
    req.logout();
    req.session.destroy();
    res.send();
  });

  app.get('/user/:uid/drugs', ensureAuthenticated, function (req, res) {
    db.all('SELECT id, application_id, username, name FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

  app.post('/user/:uid/drugs', ensureAuthenticated, function (req, res) {
    db.run('INSERT INTO drugs (application_id, username, name) VALUES (?,?,?);', [req.body.application_id ,req.params.uid, req.body.name], function (err, rows) {
      if (err) {
        res.send(err)
      } else {
        res.status(201).send('Drug ' + req.body.name + ' Created');
      }
    });
  });

  //delete drug function


  //New User Route
  app.post('/user/create', function (req, res) {
    console.log('in new auth');
    //TODO Add check for existing username before doing blind insert.
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        db.run("INSERT INTO users (username, password, salt, nickName) VALUES(?, ?, ?)", req.body.username, hash, salt, req.body.firstName);
        res.status(201).send('User ' + req.body.username + ' Created');
        //TODO: login after this
      });
    });
  });

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send();
  }

  return {
    passport           : passport,
    ensureAuthenticated: ensureAuthenticated
  };
};
