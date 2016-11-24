var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	 $scope.firstname = "Frankie";
	 $scope.changeName = function() {
	 $scope.firstname = "George";
 }
});