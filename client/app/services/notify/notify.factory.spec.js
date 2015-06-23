'use strict';

describe('factory:notify', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var notify;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    notify = $injector.get('notify');
  }));

  it('condition of test', function () {

  });

});
