'use strict';

describe('factory:util', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var util;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    util = $injector.get('util');
  }));

  it('condition of test', function () {

  });

});
