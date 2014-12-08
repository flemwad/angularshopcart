'use strict';

angular.module('AngularStore')

.controller('cartController', ['$scope', 'DataService', function ($scope, DataService) {
    $scope.DataService = DataService;

    //add shopCart object from DataService to scope for html reference
    $scope.shopCart = DataService.shopCart;
} ]);