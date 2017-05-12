angular.module('MercadoLibreApp')

.factory('SearchService', ['$http', 'API',

function($http, API) {
    return {
		getProductList: function(query) {
  			return $http.get(API.ITEMS + "?q=" + query);
        }
    };

}]);
/*

    return {
		getProductList: function(query) {
  			return $http.get(API.ITEMS + "?q=" + query);
        }
    };

    return {
		getProductList: function(query) {
//                     return $http.get("http://localhost:3000/api");
  			return $http.get(API.SEARCH + query);
        }
    };    
*/