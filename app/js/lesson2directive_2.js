var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
 
 $scope.mostrar = false;
 $scope.showname = function() {
 $scope.mostrar = true;
 }

 $scope.students = [
	 {id:0, name:'Paul', age:12},
	 {id:1,name:'Carlos', age:13},
	 {id:2,name:'Jan', age:14},
	 {id:3,name:'Ana', age:15},
	 {id:4,name:'Victor', age:16}]
});