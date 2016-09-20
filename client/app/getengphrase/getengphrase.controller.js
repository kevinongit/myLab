'use strict';

(function(){

class GetengphraseComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.phrases = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      console.log('onInit() aa');
      this.$http.get('/api/engphrases', { headers: { 'Cache-Control' : 'no-cache' } })
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
  .component('getengphrase', {
    templateUrl: 'app/getengphrase/getengphrase.html',
    controller: GetengphraseComponent
  })

  ;

})();
