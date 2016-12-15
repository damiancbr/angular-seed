app.value("factor", 6);
	//app.service("multiplier", ["factor", Multiplier]);

app.service("multiplier", ["factor", function(factor){

	this.Multiplier=function(num){
		return num * factor;
	}
	
 }]);