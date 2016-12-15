var app = angular.module('myApp', []);

app.controller('myCtrl', ['serviceCrud', 'servicioValue', '$scope',  function(serviceCrud, servicioValue, $scope) {
	 
	var varScope = this; //Cotiene el Scope del controlador, por buena practica no debemos hacer referencia al scope de forma directa
		
	$scope.$watch(function() { return varScope.productos}, function(newVal,     oldVal) {
  		varScope.mensaje = "Your selection is " + newVal;
		}, true);

	varScope.CargarRest = function(){		 
		var promise = 	serviceCrud.CargarRest();		 
		//varScope.productos = 	serviceCrud.CargarRest();		 
		promise.then(function(resultado) {
			varScope.productos = resultado.data.ventas;					
		}, 	function(error) {
			varScope.mensaje = "Se ha producido un error al obtener el dato:" + error;
		});
	}
	
	varScope.productos = []

 	varScope.valorDeServicioValue = servicioValue + " :)";

	varScope.mostrarAgregar = function()
	{
		varScope.mostrar = true;
	};

	varScope.AgregaItem = function(caja)
	{		
		if(varScope.infoForm.$valid){
			varScope.mostrar = false;

			delete varScope.caja;

			varScope.cajaWithId = {
				id: varScope.guid(),
				nombre: caja.nombre, 
				tamanio: caja.tamanio,			
				cantidad: caja.cantidad,
				tienda: caja.tienda
			}

			//varScope.productos.push(angular.copy(caja)); <-- si pasara direcro 
			varScope.productos.push(varScope.cajaWithId);

			//varScope.productos.push(angular.copy(serviceCrud.AgregarInService(caja)));
		}
		else
		{
				alert('no es valido');
		}
	};

	varScope.AgregaItemPost = function(caja)
	{	
		varScope.mostrar = false;

		delete varScope.caja;

		varScope.cajaWithId = {
			//id: varScope.guid(),
			nombre: caja.nombre, 
			tamano: caja.tamanio,			
			cantidad: caja.cantidad,
			tienda: caja.tienda
		}

		var promise = 	serviceCrud.AgregarRest(varScope.cajaWithId);

		promise.then(function(resultado) {
			varScope.productos.push(varScope.cajaWithId);
			//alert(resultado); //varScope.productos.push(cajaWithId);
		}, 	function(error) {
			//varScope.mensaje = "Se ha producido un error al obtener el dato:" + error;
		});
	};
	
	varScope.ActualizaItemPost = function(caja)
	{	
		var promise = serviceCrud.EditarItemRest(caja);

		promise.then(function(resultado) {
			for(var i =0; i < varScope.productos.length; i++)
			{
				if(caja._id == varScope.productos[i]._id){
					varScope.productos[i]  = angular.copy(caja);					
				}				
			}
			varScope.mostrar = true;

		}, 	function(error) {
			//varScope.mensaje = "Se ha producido un error al obtener el dato:" + error;
		});
	};

	varScope.EditarItem = function(producto){
		
		for(var i =0; i < varScope.productos.length; i++)
		{
			if(producto._id == varScope.productos[i]._id){
				varScope.caja  = angular.copy(varScope.productos[i]);
				varScope.caja.nombre = angular.copy(varScope.caja.producto);
			}				
		}
		varScope.mostrar = true;
	}

	varScope.EliminarItem = function(item)
	{

		/*
		var data = $.grep(varScope.productos, function(e){ 
     		return e.id != item.id; 
		});
		
		varScope.productos.splice(0);

		angular.forEach(data, function(valKey){
			varScope.productos.push(valKey);					
		});
		*/
		
		varScope.productos = serviceCrud.EliminarItem(item, varScope.productos)
	};


	
	varScope.guid = function() {
	  return varScope.s4() + varScope.s4() + '-' + varScope.s4() + '-' + varScope.s4() + '-' +  varScope.s4() + '-' + varScope.s4() + varScope.s4() + varScope.s4();
	}

	varScope.s4 = function() {
	  return Math.floor((1 + Math.random()) * 0x10000)
	    .toString(16)
	    .substring(1);
	}

	//varScope.gridOptions = { data: 'varScope.productos' };

	varScope.showError = function(ngModelController, error){
		return ngModelController.$touched && ngModelController.$error[error];
	}

}]);