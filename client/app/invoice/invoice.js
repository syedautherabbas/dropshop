'use strict';

angular.module('dropshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('invoice', {
        url: '/invoice',
        templateUrl: 'app/invoice/invoice.html',
        controller: 'InvoiceCtrl',
        authenticate: true
      });
  });
