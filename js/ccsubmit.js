'use strict';

angular.module('AngularStore')

.controller('cardController', ['$scope', 'DataService', function ($scope, DataService) {
    $scope.DataService = DataService

    $scope.name = '';
    $scope.ccNum = '';
    $scope.cvc = '';
    $scope.expiry = '';
    $scope.total = 0;
    $scope.type = '';
    $scope.ccImg = '';

    //note* for this watch to work, .png files names have to match up with type validation in angular-payments 
    $scope.$watch('type', function (newVal, oldVal) {
        // Check if value has changes
        if (newVal === oldVal) {
            return;
        }
        else if (newVal == '' || newVal == null) {
            $scope.ccImg = '';
        }
        else {
            $scope.ccImg = 'img/cctypes/' + newVal + '.png';
        }
    });

    //build a form/send a web service based off this data
    $scope.submitCart = function (items) {
        var cartCount = 0;

        items.forEach(function (cartItem) {
            $scope.total = $scope.total + (cartItem.price * cartItem.quantity);
            cartCount = cartCount + cartItem.quantity;
            console.dir(JSON.stringify(cartItem));
        });

        window.alert('Call webservice or submit form data: '
                    + '\nName: ' + $scope.name
                    + '\nCard Number: ' + $scope.ccNum
                    + '\nCVC Number: ' + $scope.cvc
                    + '\nExpiration Date: ' + $scope.expiry
                    + '\nCart Count: ' + cartCount.toString()
                    + '\nTotal: ' + $scope.total.toString()
                    + '\n\nTransaction objects are written to console.');

        $scope.total = 0;
    };
} ]);