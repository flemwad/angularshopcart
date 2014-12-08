'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
angular.module('AngularStore', ['angularPayments', 'ng-currency', 'ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.
        when('/store', {
            templateUrl: 'partials/store.htm',
            controller: 'storeController'
        }).
        when('/shopCart', {
            templateUrl: 'partials/shoppingCart.htm',
            controller: 'cartController'
        }).
        when('/product/:sku', { //:sku is passed to $routeParams.sku in storeController
            templateUrl: 'partials/product.htm',
            controller: 'storeController'
        }).
        when('/ccSubmit', {
            templateUrl: 'partials/ccsubmit.htm',
            controller: 'cardController'
        }).
        otherwise({
            redirectTo: '/store'
        });
})

// create a data service that provides a store and a shopping cart that
.factory('DataService', function () {
    //create new cart
    var cart = new shoppingCart('AngularStore');

    // return data object with cart
    return {
        shopCart: cart
    };
});