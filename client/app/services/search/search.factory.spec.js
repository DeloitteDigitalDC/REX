'use strict';

describe('factory:search', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var search;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    search = $injector.get('search');
  }));

  it('condition of test', function () {

  });

});
