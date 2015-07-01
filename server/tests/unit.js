'use strict';

var fs = require('fs');

var tests = fs.readdirSync(__dirname + '/../api');

var createPath = function (name) {
  return '../api/' + name + '/' + name + '.spec';
};

tests.forEach(function (test) {
  try {
    require(createPath(test));
  }
  catch(e) {}
});

require('../utils/utils.spec.js');