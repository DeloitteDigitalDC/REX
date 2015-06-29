'use strict';

describe('factory:modals', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var modals;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    modals = $injector.get('modals');
  }));

  it('condition of test', function () {

  });

});
