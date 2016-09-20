'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [
    				{'title' : 'Box Office', 'state' : 'boxoffice'},
    				{'title' : 'Get EngPhrase', 'state' : 'getengphrase'},
            {'title' : 'Get MovieQuote', 'state' : 'getmoviequote'}
    			];
  }

}

angular.module('getmovieApp')
  .controller('NavbarController', NavbarController);
