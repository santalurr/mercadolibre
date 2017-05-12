angular.module('MercadoLibreApp')

.factory('ItemService', ['$http', 'API',

function($http, API) {
    return {
		getItem: function(id) {
            return $http.get(API.ITEMS + "/" + id);
        },

		getCategories: function(id) {
            return $http.get(API.CATEGORIES + "/" + id);
        }
    };
}]);
