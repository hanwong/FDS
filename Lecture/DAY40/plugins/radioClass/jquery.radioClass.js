(function(global, $){
  'use strict';
  
  if ( !$.fn.radioClass ) {
    // 
    $.fn.radioClass = function (class_name) {
        if ( $.type(class_name) !== 'string' ) {
          throw new Error('전달 인자는 문자열이어야 합니다.');
        }

        var  $activated = this.siblings('.'+class_name);
        $activated.removeClass(class_name);
        this.addClass(class_name);

        // 메소드 체이닝
        return this;
    };
  }

//END IIFE PATTERN
})(this, this.jQuery);