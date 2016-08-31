(function(global, ng){
  'use strict';
  
  function demoCtrl () {
    var headline = 'this App maked Angular';
    this.headline = headline;
  }

  ng.module('ngApp')
  .controller('demoController', demoCtrl);


//END IIFE PATTERN
})(this, this.angular);