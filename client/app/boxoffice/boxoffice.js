'use strict';

angular.module('getmovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('boxoffice', {
        url: '/boxoffice',
        template: '<boxoffice></boxoffice>'
        // templateUrl: 'app/boxoffice/boxoffice.html'
      })
      .state('boxoffice.detail', {
        url: '/detail/:name',
        component: 'boxoffice.detail',
        resolve: {
        	name: function($stateParams) {
        		console.log('name is ' + $stateParams.name);
        		return $stateParams.name;
        	}
        },
   //      controller: function($stateParams) {
   //      	console.log('AAAAAAAAAAAAAA');
			// this.name = $stateParams.name;
  	// 		console.log('XXX');
  	// 		this.boxofficeCtrl.getDetail(this.name);

  	// 	},
        // template: '<boxoffice.detail></boxoffice.detail>'
        templateUrl: 'app/boxoffice/boxoffice-detail.html'
      })
      ;
  });
