'use strict';

angular.module('CSVApp')

.factory('uploadFactory', ['$resource', 'baseUrl', function($resource, baseUrl) {
  return $resource(baseUrl+'users', null, {'update': {method: 'PUT'}});
}]);
