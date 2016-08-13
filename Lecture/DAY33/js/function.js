/*
  * ----------------------------------------
  * 자바스크립트 데이터 유형 체크
  1. typeof 키워드를 사용하는 방법
  * ---------------------------------------- */

  var num, str, boo, fnc, arr, obj;

// 원시 데이터 유형 (복사)
  num = 123;
  str = 'hey, jude';
  boo = !0;

// 자료 데이터 유형 (참조)
  fnc = function () {  };
  arr = [];
  obj = {};


  // var check_fact = 100;

  // console.log(check_fact);
  // console.log(check_fact++);
  // console.log(check_fact);
  // console.log(--check_fact);
  // console.log(check_fact);
  // console.log(check_fact--);
  // console.log(check_fact);
  // console.log(++check_fact);

var today = new Date().getDay();
// var today_is = today === 0 ? '일' :
//                       today === 1 ? '월' :
//                       today === 2 ? '화' :
//                       today === 3 ? '수' :
//                       today === 4 ? '목' :
//                       today === 5 ? '금' :
//                       today === 6 ? '토' : '???';

var today_is;
switch (today) {
  case 0: today_is = '일'; 
    break;
  case 1: today_is = '월'; 
    break;
  case 2: today_is = '화'; 
    break;
  case 3: today_is = '수'; 
    break;
  case 4: today_is = '목'; 
    break;
  case 5: today_is = '금'; 
    break;
  case 6: today_is = '토'; 
    break;
  default: today_is = false;
}

console.log( today_is ? '오늘은 ' + today_is + '요일 입니다.' : '장난하냐?');

function init () {
  var event_types = 'click dblclick mouseenter mouseout mouseleave focus blur'.split(' ');
  var random_count = Math.floor( Math.random() * event_types.length );
  var event_type = event_types[ random_count ];
  var callback;
  var dom_el = query('.result');
  dom_el.setAttribute('tabindex', 0);
  dom_el.innerHTML = "This is DOM Object.";

  switch ( event_type ) {
    case 'click':
    case 'dblclick':
      callback = function () {
         console.log('clicked object');
      };
    break;

    case 'mouseenter':
    case 'mouseover':
      callback = function () {
         console.log('mouse over object');
      };
    break;

    case 'click':
    case 'dblclick':
      callback = function () {
         console.log('clicked object');
      };
    break;

  }

}