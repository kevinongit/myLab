'use strict';

angular.module('getmovieApp.auth', ['getmovieApp.constants', 'getmovieApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
