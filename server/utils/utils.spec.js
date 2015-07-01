'use strict';

var assert = require('assert'),
    utils  = require('./');

describe('should make sure that the object you send it is a parsable object', function () {
  var body = {
    'results': {
      'hello': 'world'
    }
  };

  var bodyString = JSON.stringify(body);

  it('should return the same object', function () {
    assert(utils.confirmJSON(body).results.hello === 'world');
  });

  it('should return the parsed string as an object', function () {
    assert(utils.confirmJSON(bodyString).results.hello === 'world');
  });

});