angular.module('App', ['ui.router', 'ngResource'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: 'app/states/home.html',
    })
    .state('news', {
     url: '/news',
     templateUrl: 'app/states/news.html',
     controller:'PhotosCtrl as photo'
   })
   .state('band', {
      url: "/band",
      templateUrl: 'app/states/band.html'
    })
    .state('tour', {
      url: "/tour",
      templateUrl: 'app/states/tour.html'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: 'app/states/contact.html'
    })
  })
