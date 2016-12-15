app.service("serviceCrud", ["$http", "$q", function($http, $q){

	this.CargarRest = function(){

		var defered = $q.defer();
		var promise = defered.promise;

		$http({
		method: 'GET',
		url: 	'http://localhost:3333/api/ventas/'
		}).success(function(data, status, headers, config){
							//this.productos = data.ventas;
							//defered.resolve(this.productos);		
			this.headResult =  { data, status };	
			defered.resolve(this.headResult);
		}).error(defered.reject);

		return promise;
	}

	this.AgregarRest = function(cajaWithId){

		var defered = $q.defer();
		var promise = defered.promise;

		$http({
		method: 'POST',
		url: 	'http://localhost:3333/api/ventas/',
		data: cajaWithId
		}).success(function (data, status, headers, config) {
                defered.resolve(status);
        }).error(function (data, status, headers, config) {
                
        });

		return promise;
	}

	this.EditarItemRest = function(cajaWithId){

		var defered = $q.defer();
		var promise = defered.promise;

		$http({
		method: 'PUT',
		url: 	'http://localhost:3333/api/ventas/' + cajaWithId._id,
		data: cajaWithId		
		}).success(function (data, status, headers, config) {
                defered.resolve(status);
        }).error(function (data, status, headers, config) {
                
        });

		return promise;
	}


	this.ActualizaItemPost = function(cajaWithId){

		var defered = $q.defer();
		var promise = defered.promise;

		$http({
		method: 'PUT',
		url: 	'http://localhost:3333/api/ventas/' + cajaWithId._id,
		data: cajaWithId		
		}).success(function (data, status, headers, config) {
                defered.resolve(status);
        }).error(function (data, status, headers, config) {
                
        });

		return promise;
	}

	this.EliminarItem = function(item, productos)
	{	
		var data = $.grep(productos, function(e){ 
     		return e.id != item.id; 
		});
		
		/*var data = angular.forEach(productos, function(value){
			return item.id != value.id; 
		});*/

		productos.splice(0);

		angular.forEach(data, function(valKey){
			productos.push(valKey);					
		});	

		return angular.copy(productos);	
	};

	this.AgregarInService = function(caja){

		var cajaWithId = {
			id: guid(),
			nombre: caja.nombre, 
			tamanio: caja.tamanio,			
			cantidad: caja.cantidad,
			tienda: caja.tienda
		}

		return cajaWithId;
	}

	guid = function() {
	  return s4();
	}

	s4 = function() {
	  return Math.floor((1 + Math.random()) * 0x10000)
	    .toString(16)
	    .substring(1);
	}

}])
.value("servicioValue", "Este valor está en el servicio");