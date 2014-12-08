'use strict';

angular.module('AngularStore')

//controller used to for store page
.controller('storeController', ['$scope', '$routeParams', 'DataService', function ($scope, $routeParams, DataService) {
    $scope.shopCart = DataService.shopCart;

    $scope.products = [
    //product(sku, description, price, quantity, pay amount)
        new product("SKU1", "Details 1", 20, 1, 20),
        new product("SKU2", "Details 2", 40, 1, 40),
        new product("SKU3", "Details 3", 60, 1, 60),
        new product("SKU4", "Details 4", 80, 1, 80),
        new product("SKU5", "Details 5", 100, 1, 100)
    ];

    $scope.getProduct = function (sku) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].sku == sku)
                return this.products[i];
        }

        return null;
    }

    //use these to load single item pages
    //called when the page loads to grab the correct product
    if ($routeParams.sku != null) {
        $scope.product = $scope.getProduct($routeParams.sku);
    }

    $scope.getProdMsg = function (product) {
        var count = $scope.shopCart.getTotalCount(product.sku);

        switch (count) {
            case 0:
                return 'this item is not in the cart';
            case 1:
                return 'this item is in the cart';
            default:
                return 'this item is in the cart ' + count.toString() + ' times';

        }
    }
} ]);