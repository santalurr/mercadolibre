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
        templateUrl: 'modules/Search/searchbox.html'
    })

    .state('SearchResults', {
        url: '/productsList',
        controller: 'SearchCtrl',
        templateUrl: 'modules/Search/list.html'
    })    

    .state('ProductDetail', {
        url: '/productDetail',
        controller: 'ProductCtrl',
        templateUrl: 'modules/Product/detail.html'
    });

}).run(function () {

}); 
