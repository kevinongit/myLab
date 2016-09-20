'use strict';

(function(){

class GetmoviequoteComponent {
    constructor($http, $scope, socket, $mdDialog) {
      this.$http = $http;
      this.socket = socket;
      this.phrases = [];
      this.newItem = {};
      this.msg = 'World';
      this.$mdDialog = $mdDialog;

      this.showAdvanced = function(ev) {
        console.log('inside showAdvanced');
        console.log('this.msg = ' + this.msg);
        $mdDialog.show({
          controller: GetmoviequoteComponent,
          controllerAs: '$ctrl',
          templateUrl: 'app/getmoviequote/addmoviequote.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true // Only for -xs, -sm breakpoints.
        }).then(function() {
          console.log('inside $mdDialog.then()');
        });
        console.log('end showAdvanced');
      };

      this.cancel = function() {
        console.log('$ctrl.cancel()');
      };
      this.submit = function(newItem) {
        console.log('submit function');
        console.log('newItem.movieName : ' + newItem.movieName);
      };

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      console.log('onInit() aa');
      this.$http.get('/api/moviequotes', { headers: { 'Cache-Control' : 'no-cache' } })
        .then(response => {
          console.log('hello');

          console.log('response.data = ' + response.data);
          this.phrases = response.data;
          console.log('1111 : ' + this.phrases.length);
        })
        .catch(function(err) {
          console.log('err : ' + err);
        });
       console.log('end onInit');
    }

}




angular.module('getmovieApp')
  .component('getmoviequote', {
    templateUrl: 'app/getmoviequote/getmoviequote.html',
    controller: GetmoviequoteComponent
  })
  // .component('addmoviequote', {
  //   templateUrl: 'app/getmoviequote/addmoviequote.html',
  //   controller: AddmoviequoteComponent
  // })
  ;

})();
