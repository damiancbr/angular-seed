var app = angular.module('app', []);

app.controller("SeguroController", ['$scope', '$log', '$http', function($scope, $log, $http){

	/***********/
	/*var config ={
		method:"GET",
		url:"../data/datos.json"
	}

	var response = $http(config);

	response.success(function(data, status, headers, config){
		$scope.seguro = data; 
	});

	response.error(function(data, status, headers, config){
		alert('Ocurrio un error ' + status);
	});*/
	/******************************************************/

	$http({
		method: 'GET',
		url: 	'js/app/data/datos.json'
	}).success(function(data, status, headers, config){
		$scope.seguro = data;
	}).error(function(data,status,headers,config){
		alert('Ocurrio un error: '  + status);
	});

}]);