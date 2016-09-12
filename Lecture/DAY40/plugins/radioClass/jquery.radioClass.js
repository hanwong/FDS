(function(global, $){
  'use strict';
  
  if ( !$.fn.radioClass ) {
    // 
    $.fn.radioClass = function (class_name) {
        if ( $.type(class_name) !== 'string' ) {
          throw new Error('전달 인자는 문자열이어야 합니다.');
        }
        console.log('radio this: ', this);
        var  $activated = this.siblings('.'+class_name);
        console.log('$activated: ', $activated);
        if ($activated.length === 0) {
          console.info('전달한 ${class_name}에 해당하는 형제가 없습니다 확인해보세요.');
        }
        $activated.removeClass(class_name);
        this.addClass(class_name);

        // 메소드 체이닝
        return this;
    };
  }

//END IIFE PATTERN
})(this, this.jQuery);