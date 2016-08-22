(function(global, $){
  'use strict';
  
  //오프 캔버스 메뉴 이벤트 핸들링
  var $offcanvas_wrapper = $('.offcanvas-wrapper');
  var $toggle_btn = $offcanvas_wrapper.find('.toggle-menu-button');
  // var $toggle_btn = $('.toggle-menu-button', $offcanvas_wrapper);
  var wrapper_origin_pos = $offcanvas_wrapper.css('left');

  // 오프캔버스 메뉴에서 탐색한 버튼에 클릭 이벤트 핸들링
  $toggle_btn.on('click', toggleOffcanvasMenu);

  // 이벤트 핸들러 함수
  function toggleOffcanvasMenu () {
     // this는 이벤트가 연결도니 button 문서 객체이다.
     // this가 참조하는 button 객체를 jQuery 객체화 시키는 방법은
     // jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
     // 생성된  jQuery 객체는 jQuery.prototype 객체가 가진 능력을 맘껏 사용가능하다.
    var $this = $(this); // 이런 기능은 성능을 저하시킨다. 이벤트를 발생시킬 때 마다 객체를 생성하는 형태가 된다.
    var $wrapper = $this.parent();
    $wrapper.animate({
      'left':  global.parseInt($wrapper.css('left')) === 0 ? wrapper_origin_pos : 0
    });
     
  }


//END IIFE PATTERN
})(this, this.jQuery);