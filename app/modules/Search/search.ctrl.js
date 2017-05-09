angular.module('MercadoLibreApp')

.controller('SearchCtrl', function($scope, $state, SearchService) {

	$scope.searchItem = function() {
		$state.go("SearchResults", {query: $scope.searchQuery});
	};

  	/*
		SearchService.getProductList($scope.searchQuery)
		.then(function() {
				
		},
		function() {

		});
	*/
});