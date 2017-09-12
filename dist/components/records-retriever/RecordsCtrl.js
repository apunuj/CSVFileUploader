'use strict';

angular.module('CSVApp')

.controller('RecordsCtrl', ['$scope', '$state', 'uploadFactory', function($scope, $state, uploadFactory) {
  $scope.users = uploadFactory.query()
    .$promise.then(function(records) {
      $scope.users = records;
    })
}]);
