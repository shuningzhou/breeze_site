'use strict';
/*/Users/shuningzhou/twp_cs/
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
           templateUrl: 'partials/home.html',
           controller: 'homeController'
           }).
           when('/breeze/features',{
               templateUrl: 'partials/features.html',
               controller: 'featureController'
           }).
           when('/breeze/price',{
               templateUrl: 'partials/price.html',
               controller: 'priceController'
           }).
           when('/breeze/contact',{
               templateUrl: 'partials/contact.html'
           }).
           otherwise({
               redirectTo: '/breeze'
           });
   }
]);
