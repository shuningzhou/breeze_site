'use strict';

/* Controllers */
var twpControllers = angular.module('twpControllers',[]);


twpControllers.controller('homeController', ['$scope', '$http',
    function($scope, $http){
        $http.get('data/home.json').success(function(data) {
            $scope.data = data;
        });
    }
]);

twpControllers.controller('featureController', ['$scope', '$http',
    function($scope, $http){
        $http.get('data/features.json').success(function(data) {
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