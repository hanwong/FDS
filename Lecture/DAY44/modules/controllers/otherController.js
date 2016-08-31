(function(global, ng, jq){
  'use strict';

  function otherCtrl (){
    // 컨트롤러 참조 변수 
    var that = this;
    that.init_value = null;
    that.changeInit = function () {
      if (jq.type(that.init_value) === 'null'){
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    };
  }

  ng.module('ngApp')
  .controller('otherController', otherCtrl);

//END IIFE PATTERN
})(this, this.angular, this.jQuery);