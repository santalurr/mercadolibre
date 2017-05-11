angular.module('MercadoLibreApp')

.directive('searchBar', function() {
	return {
		restrict: 'E',
		controller: 'SearchCtrl',
		templateUrl: 'modules/Search/searchbar.html'
	};
});