var fs = require('fs');

var tests = fs.readdirSync(__dirname + '/../api');

var createPath = function (name) {
  return '../api/' + name + '/' + name + '.spec'
};

tests.forEach(function(test) {
  require(createPath(test));
});