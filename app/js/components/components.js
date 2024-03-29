/**
 * Created by shuningzhou on 14-4-19.
 */
var components = angular.module('components',[])

components.directive('twpnavigationbar', function(){
        return{
            restrict: 'E',
            scope:{},
            templateUrl: 'js/components/templates/navigationBar.html',
            //templateUrl: 'js/components/templates/demoNavBar.html',
            controller:
                function($scope, $http){
                    $http.get('data/navigation.json').success(function(data){
                        $scope.data = data;
                    });
                }
        }
    });

components.directive('twpfooterbar', function(){
    return{
        restrict: 'E',
        scope:{},
        templateUrl: 'js/components/templates/footerBar.html',
        controller:
            function($scope, $http){
                $http.get('data/navigation.json').success(function(data){
                    $scope.data = data;
                });
            }
    }
});