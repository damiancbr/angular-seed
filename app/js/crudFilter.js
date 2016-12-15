app.filter('filterOrder', function() { 

	return function OrdenaNombre(input,  column, typeOrd){
	
		if(typeOrd == undefined) typeOrd = true;  // default to true

		if(typeOrd) {
			input.sort(function (a, b) {
			    return a[column] > b[column];
			});
		}
		else {
			input.sort(function (a, b) {
			    return a[column] < b[column];
			});
		}

		return input;
	}

});