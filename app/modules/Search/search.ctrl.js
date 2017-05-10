angular.module('MercadoLibreApp')

.controller('SearchCtrl', function($scope, $state, $stateParams, SearchService) {

	$scope.searchItem = function() {
		$state.go("SearchResults", {query: $scope.searchQuery});
	};

	if($stateParams.query) {
		$scope.lastSearch = $stateParams.query;

		SearchService.getProductList($stateParams.query)
		.then(function(res) {
			var totalItems = res.data.results;
			$scope.itemsList = totalItems.splice(0, 4);
		},
		function(error) {
			
		});
	}
});