'use strict';

describe('factory:user', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var user;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    user = $injector.get('user');
  }));

  it('condition of test', function () {

  });

});

