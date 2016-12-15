var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
 $scope.mostrar = false;
 $scope.showname = function() {
 $scope.mostrar = true;
 }
});