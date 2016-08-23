(function(global){
  'use strict';
  
  function Wbar(selector) {
    this.wbar = querySelector(selector);
    this.init();
  }
  Wbar.prototype = {
    'constructor': Wbar,
    'init': function () {
        var wbar = this.wbar;
        wbar.origin_class = wbar.getAttribute('class');

        var wbar_title = 
    },
    'startAnimation': function () {
       /* body... */ 
    }
  };

//END IIFE PATTERN
})(this);