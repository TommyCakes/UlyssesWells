angular.module('App', ['ui.router', 'ngResource'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: 'app/states/home.html',
    })
  })
