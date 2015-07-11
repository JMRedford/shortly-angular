angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, $timeout, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links')
      .success(function(data){
        console.log(data);
        $scope.data.links = data;
      })
  };
  $scope.getLinks();
});
