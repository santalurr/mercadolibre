angular.module('MercadoLibreApp')

.factory('ItemService', ['$http', 

function($http) {
        
    return {
		getItem: function() {
            return $http.get(ENVIRONMENT_CONFIGS.APIURL + "projects", params);
        }
    };
}]);
