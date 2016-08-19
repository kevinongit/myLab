'use strict';

angular.module('getmovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boxoffice', {
        url: '/boxoffice',
        template: '<boxoffice></boxoffice>'
      });
  });
