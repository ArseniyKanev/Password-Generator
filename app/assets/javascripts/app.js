var app = angular.module('passwordGenerator', ['ui.router', 'templates', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'angular/views/home.html',
      controller: 'PasswordsCtrl'
    });

    $urlRouterProvider.otherwise('home');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });
  }
])
