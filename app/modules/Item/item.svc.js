angular.module('MercadoLibreApp')

.factory('ItemService', ['$http', 'API',

function($http, API) {
    return {
		getItem: function(id) {
            return $http.get(API.ITEMS + "/" + id);
        },

		getItemDescription: function(id) {
            return $http.get(API.ITEM + id + "/description");
        },

		getCategories: function(id) {
            return $http.get(API.CATEGORY + id);
        }
    };
}]);
