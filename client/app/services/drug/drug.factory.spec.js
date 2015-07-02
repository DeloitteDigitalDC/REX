'use strict';

describe('factory:drugs', function () {

  // load the factory's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var drugs, $httpBackend;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    drugs = $injector.get('drug');

    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.whenGET('/fda/drugs/label')
  }));

  it('condition of test', function () {
    drugs.labels({}, 'Advil');
  });

});
