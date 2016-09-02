'use strict';

(function(){

class BoxofficeComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.overall = {};
      this.boxofficeList = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      console.log('onInit() aa');
      this.$http.get('/api/movies')
        .then(response => {
          console.log('hello');

          console.log('response.data = ' + response.data);
          
          this.overall = response.data.boxOfficeResult;
          this.boxofficeList = this.overall.dailyBoxOfficeList;
          console.log('boxofficeType : ' + this.overall.boxofficeType);
          console.log('this.boxofficeList.boxOfficeResult.boxofficeType : ' + this.overall.boxofficeType);
          
          // this.socket.syncUpdates('thing', this.boxofficeList);
        })
        .catch(function(err) {
        	console.log('err : ' + err);
        });
     console.log('end onInit');
    }

    getDetail(name) {
    	console.log("name is " + name);
    	this.$http.get('/api/movies/' + name)
        .then(response => {
          console.log('hello');

          console.log('response.data.channel.title = ' + response.data.channel.title);
          
        })
        .catch(function(err) {
        	console.log('err : ' + err);
        });
    }

}

class MovieDetailComponent {
	$onInit() {
		console.log('MovieDetailComponent');
	}
}

angular.module('getmovieApp')
  .component('boxoffice', {
    templateUrl: 'app/boxoffice/boxoffice.html',
    controller: BoxofficeComponent
  })
  .component('boxoffice.detail', {
  	templateUrl: 'app/boxoffice/boxoffice-detail.html',
  	bindings: {name: '<'},
  	controller: MovieDetailComponent
  })
  ;

})();
