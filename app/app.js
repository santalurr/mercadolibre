'use strict';

angular.module('MercadoLibreApp', 
[
  'ui.router',
  'ngSanitize'
])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider

    .state('Search', {
        url: '/',
        controller: 'SearchCtrl',
    })

    .state('SearchResults', {
        url: '/items?search=:query',
        controller: 'SearchCtrl',
        templateUrl: 'modules/Search/list.html'
    })    

    .state('ItemDetail', {
        url: '/items/:id',
        controller: 'ItemCtrl',
        templateUrl: 'modules/Item/detail.html'
    });

})

.constant('API', (function() {
  var apiAddress = 'https://api.mercadolibre.com';
  // https://api.mercadolibre.com:id​/description
  // https://api.mercadolibre.com/sites/MLA/search?q=:query
  return {
    SEARCH: apiAddress + '/sites/MLA/search?q=',
    ITEM: apiAddress + '/items/',
    CATEGORY: apiAddress + '/categories/'
  }
})()); 
