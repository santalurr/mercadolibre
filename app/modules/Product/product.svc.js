angular.module('MercadoLibreApp')

.factory('ProductService', ['$http', 

function($http) {
        
    return {
		getProduct: function() {
            return $http.get(ENVIRONMENT_CONFIGS.APIURL + "projects", params);
        }
    };
}]);
