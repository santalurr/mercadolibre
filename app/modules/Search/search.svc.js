angular.module('MercadoLibreApp')

.factory('SearchService', ['$http', 'API',

function($http, API) {
    return {
		getProductList: function(query) {
            return $http.get(API.SEARCH + query);
        }
    };
}]);
