'use strict';

/**
 * @module mediq
 *
 * @description
 * Main module of the application.
 */
angular
  .module('mediq', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
