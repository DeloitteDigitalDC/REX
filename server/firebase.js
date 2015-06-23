var Firebase = require('firebase');

var firebaseRef = new Firebase(require('./config').firebase);

module.exports = firebaseRef;

