'use strict';

/**
 * @module rex
 *
 * @description
 * Main module of the application.
 */
angular
  .module('rex', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngMaterial',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($httpProvider, $urlRouterProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;

    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
