angular.module('App', ['ui.router'])



  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'app/states/home.html'
    })
    .state('bio', {
      url: '/bio',
      templateUrl: 'app/states/bio.html'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'app/states/gallery.html',
      controller: 'PhotoCtrl as photo'
    })
    .state('news', {
      url: "/news",
      templateUrl: 'app/states/news.html'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: 'app/states/contact.html',
      controller: 'PhotoCtrl as photo'
    })
  })

  .controller('PhotoCtrl', function($http) {

   var scroll_start = 0;
   var startchange = $('#top');
   var offset = startchange.offset();
  if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".nav").css('background-color', '#2A2627');
       }
   });
  }

    var self = this;
    var self = this;
    var url = "https://api.instagram.com/v1/users/self/media/recent?access_token=2287225590.f96b4c5.30bb0ee0864046c396c120e20ca1cb29&count=30"
    var request = {
      callback: 'JSON_CALLBACK',
      // client_id: 'f5660bbde18946eda38e1b2b2da56266',
      client_id: '	f96b4c51676c4425b5de12ab8936e6a2',
    };

    $http({
      url: url,
      method: 'JSONP',
      params: request
    })
    .then (function(result) {
      self.results = result.data.data;

      console.log(result);
    });
    // }
  })
