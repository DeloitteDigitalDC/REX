'use strict';


var fb      = require('../../firebase'),
    request = require('request'),
    config  = require('../../config'),
    url     = config.firebase,
    db      = require('../../db');


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
  console.log("getDetails", db);
  db.get('SELECT * FROM users WHERE username = ?', req.params.uid, function (err, row) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      userObj.uid               = req.params.uid;
      userObj.data.email        = req.params.uid;
      userObj.data.nickName     = row.nickName;
      userObj.data.gravatarHash = row.gravatarHash;
      db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
        if (err) {
          res.send(err);
          console.log(err);
        } else {
          userObj.data.drugs = rows;
          res.send(userObj);
          console.log(userObj);
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
//TODO: GOTTA DO THIS
//user.setDetails = function (req, res) {
//  request.patch(config.firebase + '/users/' + req.params.uid + '.json?auth=' + req.cookies.token, {json: req.body}).pipe(res);
//};



/**
 * get cabinet drugs
 *
 * @memberof user.controller
 *
 * @param req
 * @param res
 */
//user.getCabinetDrugs = function (req, res) {
//  request(config.firebase + '/users/' + req.params.uid + '/drugs/.json?auth=' + req.cookies.token).pipe(res);
//};

user.getCabinetDrugs = function (req, res) {
  db.all('SELECT * FROM drugs WHERE username = ?', req.params.uid, function (err, rows) {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.send(rows);
      console.log(rows);
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
  console.log('in add drug function', req.body);
  db.run('INSERT INTO drugs (id, username, name, expirationDate) VALUES (?,?,?, ?);', [req.body.id, req.params.uid, req.body.name, req.body.expirationDate], function (err, rows) {
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
  db.run('delete from drugs where drugs.id = ? ', req.params.drugId, function(err, row){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send('deleted: ' + row);
    }
  });
};

module.exports = user;

