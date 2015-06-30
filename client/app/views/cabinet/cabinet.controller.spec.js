'use strict';

describe('Controller:CabinetCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var CabinetCtrl, $state, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();

    CabinetCtrl = $injector.get('$controller')('CabinetCtrl', {
      scope: scope
    });

    $httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');

    $httpBackend.whenGET('/fda/drug/enforcement/?limit=100&search=(openfda.brand_name:)').respond(200, {
      results: [
        {
          id: '72kgkhx87w3ouw3hj34',
          name: 'Advil',
          openfda: {
            brand_name: ['Advil']
          }
        }
      ]
    });
  }));

  it('should check for recalls', function () {
    CabinetCtrl.drugs = [
      {
        id: '72kgkhx87w3ouw3hj34',
        name: 'Advil',
        openfda: {
          brand_name: ['Advil']
        }
      }
    ];

    $httpBackend.flush();

    scope.$apply();
  });

  it('should go to the search state', function () {
    CabinetCtrl.search();

    scope.$apply();

    $httpBackend.flush();

    expect($state.current.name).toBe('main.search.searchResults');
  });

});
