angular.module("services", [])
	.value("factor", 6)
	.factory("square", ["factor", function (factor) {
			return factor * factor;
	}])
	.factory("square2", ["factor", function (factor) {
			return (factor * factor) - 1 ;
	}]);