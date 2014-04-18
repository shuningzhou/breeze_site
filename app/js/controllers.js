'use strict';

/* Controllers */

var twpControllers = angular.module('twpControllers',[]);

twpControllers.controller('defaultController', ['$scope', '$http',
    function($scope, $http){
        $http.get('data/default.json').success(function(data) {
           $scope.data = data;
        });
    }
]);

twpControllers.controller('priceController', ['$scope', '$http',
    function($scope, $http){
        $http.get('data/price.json').success(function(data) {
            $scope.data = data;
        });
    }
]);