// 자바스크립트는 변수 앞에  var 키워드를 붙인다.
// [카멜케이스 표기식]

var dp = window.devicePixelRatio;

// 웹 브라우저의 콘솔 패널에 기록을 남긴다.
// console.log('기기의 픽셀 농도', dp);

// 조건문
// if (dp == 1) {
//   console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
// } else if (dp == 2) {
//   console.log("레티나 디스플레이의 픽셀 농도를 가집니다.");
// }

/*
  * ----------------------------------------
  * 웹 브라우저 창의 화면 가로 (세로) 폭
  */
var iw = window.innerWidth;


/*
  * ----------------------------------------
  * window.scriollX
  * window.pageXOffset
  * window.scriollY
  * window.pageYOffset
  */

var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

// console.log('window_scrollX', window_scrollX);
// console.log('window_scrollY', window_scrollY);

// 변수 선언만 하는 경우, 즉 값이 대입(할당) 되지 않은 경우 undefined 값이 기본으로 할당되어 있다.
var scroll_Y; // null, undefined

// window 전역 객체 속성 중에 scrollTop이 있는가 확인?
// 해당 속성이 있는 브라우져가 있고 없는 브라우져가 있을 수 있다.
// if (window.scrollTop) {
//   scroll_Y = window.scrollTop;
//   console.log('scroll_Top: ', scroll_Y);
// } else {
//   scroll_Y = window.scrollY;
//   console.log('scroll_Y: ', scroll_Y);
// }


/*
  * ----------------------------------------
  * window 객체의 메소드(함수)
  * 메소드(Method) 란?
  * 객체가 소유하고 있는 함수를 가리킨다.
  */

// window.alert('다이얼로그 창을 띄움으로서 사용자에게 메세지를 보여준다.');
// var is_youngman = window.confirm('당신은 청년입니까?');
// console.log('is_youngman:', is_youngman);
// if (is_youngman) {
//   console.log('취업 준비');
// } else {
//   console.log('노년 대비');
// }

// var ua = window.prompt('당신의 이름은 무엇입니까?','예> 홍길동');

// window.alert(ua+'님 반갑습니다!!!');


var count = 10;

function countDown() {
  count = count - 1;
  console.log(count);
  return count;
}

// window.setInterval(할일, 시간); //주기마다 계속 반복
// window.setTimeout(할일, 시간); //1회

/*
  * ----------------------------------------
  *  주기 
  * ---------------------------------------- */
// window.setInterval(countDown, 1000);

