'use strict';

angular.module('dropshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentation', {
        title: 'Documentation',
        url: '/documentation',
        templateUrl: 'app/documentation/documentation.html',
        controller: 'DocumentationCtrl'
      });
  });
