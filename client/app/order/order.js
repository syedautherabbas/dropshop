'use strict';

angular.module('dropshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        title: 'Orders placed in recent past',
        url: '/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl',
        authenticate: true
      });
  });
