angular.module('MercadoLibreApp')

.controller('ItemCtrl', function($scope, $stateParams, ItemService) {

	ItemService.getItem($stateParams.id)
	.then(function(res) {
		$scope.item = res.data;

		getDescription($scope.item.id)
		getCategories($scope.item.category_id);
	},
	function(error) {

	});	

	function getDescription(itemId) {
		ItemService.getItemDescription(itemId)
		.then(function(res) {
			$scope.description = res.data.text;
			console.log('DESCRIPTION', $scope.description);
		},
		function(error) {
			
		});	
	}

	function getCategories(categoryId) {
		ItemService.getCategories(categoryId)
		.then(function(res) {
			$scope.categories = res.data.path_from_root;
		},
		function(error) {
			
		});	
	}
  
});