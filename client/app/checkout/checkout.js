'use strict';

angular.module('dropshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkout', {
        title: 'Checkout with the items you selected',
        url: '/checkout',
        templateUrl: 'app/checkout/checkout.html',
        controller: 'CheckoutCtrl',
        authenticate: true
      });
  });
