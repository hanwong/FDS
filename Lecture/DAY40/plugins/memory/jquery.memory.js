(function(global, $){
  'use strict';
    if (!$.memory) {
    $.memory = function(dom_el) {
      if ( dom_el.nodeType !== 1 ) {
        throw new Error('DOM 객체를 전달해야 합니다.');
      }
      // 전달 받은 dom_el는 $this라고 하는 데이터가 메모리 되어 있는가?
      if ( !$.data(dom_el, '$this') ) {
        $.data(dom_el, '$this', $(dom_el));
      }
      return $.data(dom_el, '$this');
    };
    // 별칭
    $.$ = $.memory;
  }
  

//END IIFE PATTERN
})(this, this.jQuery);