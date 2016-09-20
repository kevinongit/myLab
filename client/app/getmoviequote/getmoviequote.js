'use strict';

angular.module('getmovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('getmoviequote', {
        url: '/getmoviequote',
        template: '<getmoviequote></getmoviequote>'
        // templateUrl: 'app/getmoviequote/getmoviequote.html'
      })
      ;
  });
