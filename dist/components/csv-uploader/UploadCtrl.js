'use strict';

angular.module('CSVApp')

.controller('UploadCtrl', ['$scope', '$state', 'uploadFactory', function($scope, $state, uploadFactory) {
  $scope.fileContent = '';
  $scope.csvFile = null;
  $scope.csvFileName = '';

  $scope.uploadData = function() {
    var names = $scope.fileContent[0];
    var params = $scope.fileContent.slice(1, $scope.fileContent.length);
    function toObj(arr) {
      return arr.reduce(function(p, c, i) {
        p[names[i]] = c;
        return p;
      }, {});
    };
    var batchUploadArray = params.map(toObj);
    uploadFactory.save(batchUploadArray)
    .$promise.then(function(response) {
      $state.go('view');
    }, function(response) {
      console.log(response.status);
      $state.go('view');
    })
  };

  $scope.undo = function() {
    $state.go('upload');
  };

}]);
