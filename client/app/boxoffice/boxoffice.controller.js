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
    	console.log('getDetail : name is' + name);
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
  constructor($http, $scope, socket,$stateParams) {
      this.$http = $http;
      this.channel = {};
      this.name = $stateParams.name;
      this.slides = [];
      console.log('MovieDetailComponent:constructor:name : ', this.name);
  }

	$onInit() {
		console.log('MovieDetailComponent');
    this.message = 'Over There';
    console.log('name ==> ', this.name);
    this.getDetail(this.name);
    console.log('END MovieDetailComponent');
	}

  getDetail(name) {
        console.log('getDetail : name is ' + name);
        this.$http.get('/api/movies/' + name)
          .then(response => {
            console.log('hello');
            this.channel = response.data.channel;
            this.movie = this.channel.item[0];
            // build up slides out of scattered photo?
            var index=0;
            this.slides.push({'image': this.movie.photo1.content, 'text': this.movie.title[0].content, id: index++});
            this.slides.push({'image': this.movie.photo2.content, 'text': this.movie.title[0].content, id: index++});
            this.slides.push({'image': this.movie.photo3.content, 'text': this.movie.title[0].content, id: index++});
            this.slides.push({'image': this.movie.photo4.content, 'text': this.movie.title[0].content, id: index++});
            this.slides.push({'image': this.movie.photo5.content, 'text': this.movie.title[0].content, id: index++});
            console.log('this.movie.title[0].content = ' + this.movie.title[0].content);            
          })
          .catch(function(err) {
            console.log('err : ' + err);
          });
      }
}

angular.module('getmovieApp')
  .component('boxoffice', {
    templateUrl: 'app/boxoffice/boxoffice.html',
    controller: BoxofficeComponent
  })
  .component('boxoffice.detail', {
  	templateUrl: 'app/boxoffice/boxoffice-detail.html',
    require: {
      boxCtrl : '^boxoffice'
    },
  	bindings: {name: '@'},
    // controller: function($stateParams) {
    //   this.message = "Hi There";
    //   this.name = $stateParams.name;
    //   console.log('this.name = ' + this.name);
    //   this.boxCtrl.getDetail(this.name);

    // }
  	controller: MovieDetailComponent
  })
  ;

})();
