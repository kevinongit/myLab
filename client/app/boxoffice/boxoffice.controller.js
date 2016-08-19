'use strict';

(function(){

class BoxofficeComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.boxofficeList = ['aaa'];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      console.log('onInit()');
      this.$http.get('/api/movies')
        .then(response => {
          this.boxofficeList = response.data;
          console.log('response.data = ' + response.data);
          this.socket.syncUpdates('thing', this.boxofficeList);
        })
        .catch(function(err) {
        	console.log('err : ' + err);
        });
    }
}

angular.module('getmovieApp')
  .component('boxoffice', {
    templateUrl: 'app/boxoffice/boxoffice.html',
    controller: BoxofficeComponent,
    controllerAs: 'boxofficeCtrl'
  });

})();
