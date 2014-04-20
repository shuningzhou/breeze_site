'use strict';

/* App Module */

var twpApp = angular.module('twpApp', [
   'ngRoute',
   'twpControllers',
   'components'
]);

twpApp.config(['$routeProvider',
   function($routeProvider){
       $routeProvider.
           when('/breeze',{
           templateUrl: 'partials/default.html',
           controller: 'defaultController'
           }).
           when('/breeze/price',{
               templateUrl: 'partials/price.html',
               controller: 'priceController'
           }).
           otherwise({
               redirectTo: '/breeze'
           });
   }
]);
