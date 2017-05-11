angular.module('MercadoLibreApp')

.controller('ItemCtrl', function($scope, $stateParams, ItemService) {

	ItemService.getItem($stateParams.id)
	.then(function(res) {
		$scope.item = res.data;
		var priceArray = $scope.item.price.toString().split(".");
		$scope.ars = priceArray[0];
		$scope.cents = priceArray[1];

		getDescription($scope.item.id)
		getCategories($scope.item.category_id);
	},
	function(error) {
		console.log(error);
	});	

	function getDescription(itemId) {
		ItemService.getItemDescription(itemId)
		.then(function(res) {
			$scope.description = res.data.text;
		},
		function(error) {
			console.log(error);
		});	
	}

	function getCategories(categoryId) {
		ItemService.getCategories(categoryId)
		.then(function(res) {
			$scope.categories = res.data.path_from_root;
		},
		function(error) {
			console.log(error);
		});	
	}
  
});