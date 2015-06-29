'use strict';

module.exports = function (app) {
  var session       = require('express-session'),
      FileStore     = require('session-file-store')(session),
      passport      = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt        = require('bcrypt'),
      sqlite3       = require('sqlite3'),
      $q            = require('q'),
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
    unset            : 'destroy',
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
      if (!row) return done(null, false, {message: 'User not found.'}); //TODO: user doesnt exist! Send message saying not found
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
    res.status(200).send(req.body.username);
  });

  app.get('/user/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.clearCookie('connect.sid', {path: '/'});
      res.redirect('/');
    });
  });

  app.get('/user/:uid/details/', function (req, res) {
    var userObj = {data: {}};
    db.all('SELECT id, application_id, username, name FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        userObj.uid = req.params.uid;
        userObj.data.email = req.params.uid;
        userObj.data.drugs = rows;
        res.send(userObj);
        console.log(userObj);
      }
    });
  });

  //todo: add authentication
  app.get('/user/:uid/cabinet/', function (req, res) {
    db.all('SELECT id, application_id, username, name FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(rows);
        console.log(rows);
      }
    });
  });

  app.post('/user/:uid/cabinet/', ensureAuthenticated, function (req, res) {
    db.run('INSERT INTO drugs (application_id, username, name) VALUES (?,?,?);', [req.body.application_id, req.params.uid, req.body.name], function (err, rows) {
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
    checkUserExists(req.body.username).then(function () {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          db.run("INSERT INTO users (username, password, salt, nickName) VALUES(?, ?, ?, ?)", req.body.username, hash,
            salt, req.body.firstName);
          res.status(201).send('User ' + req.body.username + ' Created');
          //TODO: login after this
        });
      });
    }, function (row) {
      console.error("Duplicate User", row);
      res.status(400).send();
    });

  });

  /**
   * Checks to see if the username already exists in the database.
   * @param id
   * @returns promise
   */
  function checkUserExists(username) {
    var usercheckPromise = $q.defer();
    db.get('SELECT id, username FROM users WHERE username = ?', username, function (err, row) {
      if (err) console.error(err);
      if (row) {
        usercheckPromise.reject(row);
      } else {
        usercheckPromise.resolve();
      }
    })
    return usercheckPromise.promise;
  }

  /**
   * Simple Route middleware to cehck for authentication
   * @param req
   * @param res
   * @param next
   * @returns {*}
   */
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
