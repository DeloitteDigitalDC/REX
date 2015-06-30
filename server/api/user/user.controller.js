'use strict';


var db   = require('../../db');
var user = {};

/**
 * get the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getDetails = function (req, res) {
  var userObj = {data: {}};

  db.get('SELECT * FROM users WHERE username = ?', req.params.uid, function (err, row) {
    if (err) {
      res.send(err);
    } else {
      userObj.uid        = req.params.uid;
      userObj.data       = row;
      userObj.data.email = row.username;
      delete userObj.data.password;
      delete userObj.data.salt;
      db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
        if (err) {
          res.send(err);
        } else {
          userObj.data.drugs = rows;
          res.send(userObj);
        }
      });
    }
  });
};


/**
 * set the details for the authenticated used;
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.setDetails = function (req, res) {

  db.run('UPDATE USERS SET PREGNANT = ? WHERE USERNAME = ?', req.body.pregnant, req.params.uid, function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('updated user');
    }
  });

};


/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.getCabinetDrugs = function (req, res) {
  db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
    if (err) {
      res.status(500).send(err);

    } else {
      res.send(rows);

    }
  });

};

/**
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.addCabinetDrug = function (req, res) {
  db.run('INSERT INTO drugs (id, username, name, expirationDate) VALUES (?,?,?, ?);', [req.body.id, req.params.uid, req.body.name, req.body.expirationDate], function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Drug ' + req.body.name + ' Created');
    }
  });
};

/**
 * add drug to your cabinet
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
user.deleteCabinetDrug = function (req, res) {
  db.run('delete from drugs where drugs.id = ? ', req.params.drugId, function (err, row) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('deleted: ' + row);
    }
  });
};

module.exports = user;

