angular.module('MercadoLibreApp')

.factory('SearchService', ['$http', 

function($http) {
        
    return {
		getProductList: function() {
            return $http.get(ENVIRONMENT_CONFIGS.APIURL + "projects", params);
        },

    };
}]);
