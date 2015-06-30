'use strict';

describe('Controller:RecallsCtrl', function () {

  // load the controller's module
  beforeEach(module('rex'));
  beforeEach(module('templates'));

  var RecallsCtrl, $httpBackend, scope, $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $state) {
    $controller = $injector.get('$controller');

    scope = $injector.get('$rootScope').$new();

    $state.go('main.drugProfile', {name: 'Advil'});

    scope.$apply();

    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should pull back recall data and format dates', function () {
    $httpBackend.whenGET('/fda/drug/enforcement/?limit=100&search=(openfda.brand_name:%22Advil%22)').respond(200, {
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

    RecallsCtrl = $controller('RecallsCtrl');

    $httpBackend.flush();

    scope.$apply();
  });

  it('should display failed message', function () {
    $httpBackend.whenGET('/fda/drug/enforcement/?limit=100&search=(openfda.brand_name:%22Advil%22)').respond(500);

    RecallsCtrl = $controller('RecallsCtrl');

    $httpBackend.flush();

    scope.$apply();

    expect(RecallsCtrl.fieldsLoaded).toBe(true);
    expect(RecallsCtrl.noData).toBe(true);
  });

});
