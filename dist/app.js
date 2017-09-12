'use strict';

angular.module('CSVApp', [
  'ngResource',
  'ui.router'
])

.constant('baseUrl', 'http://localhost:3000/')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('upload', {
    url: '/',
    templateUrl: 'components/csv-uploader/uploadView.html',
    controller: 'UploadCtrl'
  })

  .state('view', {
    url: '/view',
    templateUrl: 'components/records-retriever/recordsView.html',
    controller: 'RecordsCtrl'
  });

  $urlRouterProvider.otherwise('/');

}]);
