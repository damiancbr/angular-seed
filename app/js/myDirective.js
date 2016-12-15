app.directive('ventasDiv',  function( ) {
return {
		restrict : 'E',
		template : '{{ producto.tienda }} <input type="button" value="Eliminar" ng-click="varScope.EliminarItem(producto)"/>'
	}
});

