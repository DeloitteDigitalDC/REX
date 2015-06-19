// add path to unit tests here
var tests = [
  '../api/fda/spec'
];

tests.forEach(function(val) {
  require(val);
});

