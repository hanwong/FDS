/*! ui-carousel.js*/

// 자바스크립트가 지원되는 환경임을 식별할 수 잇는 모듈
(function(global){
    'use strict';
    
    global.html = query('html');
    
    if ( html.classList ){
      // 신형 방식 IE 10+
      html.classList.remove('no-js');
      html.classList.add('js');
    } else {
      // 구형방
      var html_class_attr = html.getAttribute('class');
      // 설정
      html.setAttribute('class', html_class_attr.replace(/no-js/, 'js'));
      
    }
  
  //END IIFE PATTERN
  })(this);  

// UI Carousel 컴포넌트(Component) 제작

(function(global){
  'use strict';

  // -----------------------------------------------------
  // 1. [절차 지향] 함수 형 방식으로 진행
  // -----------------------------------------------------
  // 1.1 컴퍼넌트 분석
  // 애플리케이션 초기화
  //   해당 요소를 컴포넌트화
  //   요소의 클래스 생성
  //   버튼을 동적으로 생성
  //   버튼 이벤트 핸들링
  // 핸들러 작성
  //   
  // 1.2 기능 설계
  // 1.3 기능 구현
  // 1.4 테스트
  // 1.5 빌드(배포)

  // 번수
  var carousel_contents_wrapper;
  var content_height;
  var carousel_contents_total;
  // 애플리케이션 초기화
  function init (selector) {
     // 스타일 식별자 class 속성 생성
     var carousel = query(selector);
     // 기존 Carousel 참조 문서 객체의 class 속성 값을 메모리
     // 객체.속성 방식을 사용하여 메모리
     carousel.orgin_class = carousel.getAttribute('class') || '';
     carousel.setAttribute('class', (carousel.orgin_class + ' ui-carousel').trim() );

     // WAI-ARIA 생성
     carousel.setAttribute('role', 'application');
     carousel.setAttribute('aria-label', 'Demo UI Carousel Component');

     // 래핑 요소를 생성
     carousel_contents_wrapper = createNode('div');
     // 래핑 요소에 클래스 속성 설정
     carousel_contents_wrapper.setAttribute('class', 'ui-carousel--content__wrapper');
     // 래핑 요소에 WAI-ARIA 생성
     carousel_contents_wrapper.setAttribute('role', 'group');

     // Carousel 콘텐츠 래핑
     var carousel_contents = makeArray( queryAll( selector + '> *') );
     carousel_contents_total = carousel_contents.length;
     carousel_contents.forEach(function (content, index) {
        // 자식 요소의 클래스 속성
        content.setAttribute('class', 'ui-carousel--content');
        // 자식 요소의 내부에서 제목 요소를 찾아 class 속성 설정
        var headline = query('h2', content);
        headline.setAttribute('class', 'ui-carousel--content__headline');
        // 레핑 요소에 자식 요소로 삽입
        carousel_contents_wrapper.appendChild(content);
     });

     // Carousel 컴포넌트의 첫번째 자식 요소로 삽입
     prependChild(carousel, carousel_contents_wrapper);

     // 버튼 그룹과 버튼 요소들을 동적으로 생성
     var button_group = createNode('div');
     // 버튼 그룹 속성 설정
     button_group.setAttribute('class', 'ui-carousel--navigation__buttons');
     button_group.setAttribute('role', 'group');

     // 버튼 생성
     var prev_button = createNode('button');
     prev_button.setAttribute('type', 'button');
     var next_button = prev_button.cloneNode();

     // 각 버튼에 class 식별자를 생성
     prev_button.setAttribute('class', 'ui-carousel--navigation__prev_button');
     prev_button.setAttribute('aira-label', 'previous content');
     prev_button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
     next_button.setAttribute('class', 'ui-carousel--navigation__next_button');
     next_button.setAttribute('aira-label', 'nextious content');
     next_button.innerHTML = '<span class="fa fa-angle-down" aria-hidden="true"></span>';

     // 버튼 그룹에 버튼을 자식 요소로 삽입
     button_group.appendChild(prev_button);
     button_group.appendChild(next_button);
     //Carousel 콘텐츠 밑에 버튼 그룹 삽입
     carousel.appendChild(button_group);


     // 콘텐츠 래퍼 문서 객체로부터 첫번째 자식 객체(콘텐츠)를 변수에 참조
     var content = firstEl(carousel_contents_wrapper);
     // console.log(content);

     // 콘텐츠의 높이를 가져온다.
     content_height = removeUnit( getStyle(content, 'height') );
     // console.log(content_height);
     
     // 버튼 이벤트 바인딩
     bindEvent();
  }

  // 버튼 이벤트 바인딩 함수
  function bindEvent () {
     var buttons =  makeArray( queryAll('.ui-carousel--navigation__buttons button'));
     var len = buttons.length;
     while(buttons[--len]) {
      buttons[len].onclick = movingCarouselContents;
     }
  }

  // 버튼에 연결된 함수
  function movingCarouselContents () {
    // 기능 구현 -------------------------------------------------------------------------
    // 선택된 버튼 구분
    var check_class = this.getAttribute('class');

    var current_wrapper_top = removeUnit( getStyle(carousel_contents_wrapper, 'top') );
    // console.log(current_wrapper_top);
    var changed_wrapper_top;

    // 콘텐츠 래퍼를 이동시켜준다. 
    if ( /prev/.test(check_class) ) {
      changed_wrapper_top = current_wrapper_top + content_height;
      if ( changed_wrapper_top === content_height ) {
        changed_wrapper_top = -1 * ( content_height * ( carousel_contents_total -1 ) );
      }
      css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');

    } else {
      changed_wrapper_top = current_wrapper_top - content_height;
      if ( changed_wrapper_top === - 1 *  (content_height * ( carousel_contents_total)) ){
        changed_wrapper_top = 0;
      }
      css(carousel_contents_wrapper, 'top', changed_wrapper_top + 'px');
    }
  }

  // 초기화 설정
  init('.main-ad-area');

})(this);


(function(global){
  'use strict';

  // -----------------------------------------------------
  // 2. [객체 지향] 커스텀 객체 형태로 변경
  // -----------------------------------------------------
  // 2.1 객체 생성자 (ES 2015. class 제작)
  // 2.2 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
  // 2.3 정의된 기능 구현
  // 2.4 테스트
  // 2.5 빌드(배포)

})(this);