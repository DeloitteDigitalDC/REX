'use strict';

describe('factory:api', function () {

  // load the factory's module
  beforeEach(module('mediq'));

  var api;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    api = $injector.get('api');
  }));

  it('should have 3 drug endpoints', function () {
    expect(api.drug.event).toBe('/fda/drug/event.json/');
    expect(api.drug.label).toBe('/fda/drug/label.json/');
    expect(api.drug.enforcement).toBe('/fda/drug/enforcement.json/');
  });

});
