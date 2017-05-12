'use strict';

angular.module('MercadoLibreApp', 
[
  'ui.router',
  'ngSanitize'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    
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
  var apiAddress = 'http://localhost:3000/api',
      meliAddress = 'https://api.mercadolibre.com';

  // https://api.mercadolibre.com/items/:id​/description
  // https://api.mercadolibre.com/sites/MLA/search?q=:query

  // SEARCH: meliAddress + '/sites/MLA/search?q=',
  // ITEM: meliAddress + '/items/'
  // CATEGORY: meliAddress + '/categories/'
  
  return {
    ITEMS: apiAddress + '/items',
    CATEGORY: meliAddress + '/categories/',
    ITEM: meliAddress + '/items/'
  }
})()); 