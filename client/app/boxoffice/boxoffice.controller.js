'use strict';

(function(){

class BoxofficeComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.boxofficeList = {};

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
          this.boxofficeList = {};
          this.boxofficeList = response.data;
          console.log('boxofficeType : ' + response.data.boxOfficeResult.boxofficeType);
          
          // this.socket.syncUpdates('thing', this.boxofficeList);
        })
        .catch(function(err) {
        	console.log('err : ' + err);
        });
     console.log('end onInit');
    }
    // $onInit() {
    //   console.log('onInit() aa');
    //   this.$http.get('/api/movies')
    //     .then(response => {
    //     	console.log('hello');
    //       this.boxofficeList = response.data;
    //       console.log('response.data = ' + response.data);
    //       this.socket.syncUpdates('thing', this.boxofficeList);
    //     })
    //     .catch(function(err) {
    //     	console.log('err : ' + err);
    //     });
    //  console.log('end onInit');
    // }
}

angular.module('getmovieApp')
  .component('boxoffice', {
    templateUrl: 'app/boxoffice/boxoffice.html',
    controller: BoxofficeComponent,
    controllerAs: 'boxofficeCtrl'
  });

})();
