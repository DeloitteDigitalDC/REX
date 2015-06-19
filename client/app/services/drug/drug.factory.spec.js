'use strict';

describe('factory:drugs', function () {

  // load the factory's module
  beforeEach(module('mediq'));

  var drugs;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    drugs = $injector.get('drug');
  }));

  it('condition of test', function () {

  });

});
