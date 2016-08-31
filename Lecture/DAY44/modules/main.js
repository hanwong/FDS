(function(global, ng){
  'use strict';
  
  var app = ng.module('fdsApp',[]);

  app.controller('fdsMemberController', ['$http', function($http){
    var ctrl = this;
    ctrl.members = [];

    $http({
      'method': 'GET',
      'url': 'db/onpiece.json'
    }).then(successAjax);

    function successAjax (response) {
      console.log(response);
       ctrl.members = response.data; 
    }

  }])

//END IIFE PATTERN
})(this, this.angular);