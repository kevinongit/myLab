'use strict';

angular.module('getmovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getengphrase', {
        url: '/getengphrase',
        template: '<getengphrase></getengphrase>'
        // templateUrl: 'app/getengphrase/getengphrase.html'
      })
      ;
  });
