angular.module('App')

.controller('PhotosCtrl', function($http) {

  var self = this;

  // this.getRecentPictures = function() {

  var user = 'tommycake';
  var accessToken = '341290126.f5660bb.ba6292f44e2e4bc98e4a582998a639f3';
  // var url = "https://api.instagram.com/v1/users/" + user + "/media/recent/?";
  var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + accessToken
  var request = {
    callback: 'JSON_CALLBACK',
    // client_id: 'f5660bbde18946eda38e1b2b2da56266',
    client_id: 'fc9f7c6daadf469bbd1decba087f0f44'
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
