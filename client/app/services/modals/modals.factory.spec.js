'use strict';

describe('factory:modals', function () {

  // load the factory's module
  beforeEach(module('rex'));

  var modals;

  // initialize a new instance of the factory before each test
  beforeEach(inject(function ($injector) {
    modals = $injector.get('modals');
  }));

  it('should display the add drug modal', function () {
    modals.addDrug(null, {
      name: 'Advil'
    })
  });

  it('should display the edit drug modal', function () {
    modals.editDrug(null, {
      name: 'Advil'
    })
  });

  it('should display the remove drug modal', function () {
    modals.removeDrug(null)
  });

});
