angular.module('MercadoLibreApp')

.controller('ItemCtrl', function($scope, $stateParams, ItemService) {

	ItemService.getItem($stateParams.id)
	.then(function(res) {
		$scope.item = res.data.item;

		getCategories($scope.item.category);
	},
	function(error) {
		console.log(error);
	});	

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