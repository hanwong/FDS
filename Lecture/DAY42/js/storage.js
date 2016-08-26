(function(global, storage, $){
  'use strict';
  
  // 루트 요소인  HTML을 참조하는 jQuery객체 생성
  var $html = $('html');

  // 사용자의 웹 브라우저가 localStorage가 존자하는가?
  if (storage) {
    $html.addClass('localstorage');
  } else {
    $html.addClass('no-localstorage');
  }

  // 로컬스토리지 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고
  if ( $html.hasClass('no-localstorage')) {
    console.log('로컬스토리지가 지원되는 최신 브라우저로 업데이트 하세요.');
    return;
  }

  // 사용자의 웹 브라우저에 데이터를 저장/가져오기/지우기 등을 수행할 수 있다.

  // 데이타 가져오기
  var FDS = storage.getItem('FDS');
  FDS ? console.log('FDS 값: ', FDS) : console.log('FDS는 존재하지 않습니다.');

  // 데이타 저장하기
  if (!FDS) {
    storage.setItem('FDS', 'Front-end Develope School, FAST CAMPUS');
  }

  // 데이타 지우기
  if (FDS) {
    storage.removeItem('FDS');
  }

  // 데이타 모두 지우기
  storage.length > 0 && storage.clear();

  // Object --> JSON String --> Object
  // Model Data [me]
  var hanwong = {
    'name': 'Kim Han Woong',
    'job': 'Developer',
    'age': 32,
    'gender': 'male',
    'email': 'hanationbear@gmail.com'
  };
  var str_hanwong = JSON.stringify(hanwong);
  storage.setItem('hanwong', str_hanwong);

  var obj_hanwong = JSON.parse(localStorage.getItem('hanwong'));

  global.hanwong = hanwong;

//END IIFE PATTERN
})(this, this.localStorage, this.jQuery);

