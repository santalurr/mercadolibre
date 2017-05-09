'use strict';

angular.module('MercadoLibreApp', 
[
  'ui.router'
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

}).run(function () {

}); 
