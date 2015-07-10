angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    $http.post('/api/links', {url:$scope.link.address});
  }
});
