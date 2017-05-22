var app = angular.module('passwordGenerator', ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'angular/views/home.html',
      controller: 'PasswordssCtrl'
    });

    $urlRouterProvider.otherwise('home');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });
  }
])
