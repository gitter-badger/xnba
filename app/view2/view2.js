'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/jugadores', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }])


    .controller('View2Ctrl', ['$scope', function($scope) {
            $scope.naomi = "Naomi";

    }]);



