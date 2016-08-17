var movielist = '터널 부산행 서울역 덕혜옹주'.split(' ');

// Array Method: .forEach(원소, 순서, 배열) - 반환 값이 없다. (undefined)
var newmovielist = movielist.forEach(function(item, idx) {
  // console.log(`item ${idx} :`, item);
   return item;
});

// Array Method: .method(원소, 순서, 배열) - 반환 값은 수정된 배열을 반환한다. 반환 값을 변수에 저장할 수 있음
var new_movielist = movielist.map(function (item, idx, arr) {
   // console.log(`item ${idx} :`, item);
   return item;
});


// 함수 호이스팅, 스코프

var scopeFn = function (movielist) {
  
   if (movielist) {
    let movielist = '영화가 좋다!';
    console.log('if 내부: ', movielist);
   }
   // console.log('함수 내부: ', movie_list);
   let movie_list = '영화 안의 영화!!';
}

scopeFn(movielist);
console.log('함수 내부: ', movielist);

// 일반 함수(글로벌 스코프에 정의된 함수)
function showMe( ) {
  // console.log(this);
  return this;
}
// console.log(showMe() === window);

// 객체의 속성에 함수를 할당 (메소드가 됨)
var fds = {
  callMe: showMe
};
// console.log(fds.callMe() === fds);

// 자바스크립트 엄격 모드
function strictFn () {
  // 엄격 모드 발동
  // ES2015 버전부터는 기본 설정 값이 "엄격 모드""
  'use strict';

  // 변수 선언시에 var 키워드를 강제화 한다. (오류발생)
  var hi_msg = 'Hello';
  // this 컨텍스트 참조 변수는 더이상 window전역 객체가 아닌 undefined이다.
  console.log(this, hi_msg);
}

// 엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우
//  그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다. ( 문제발생 !! )
strictFn(); // this === undefined

// 반면 엄격모드에서 명시적으로 특정 객체가 함수를 호출하게 되면
//  this컨텍스트 참조 변수는 해당 객체를 참조한다.
window.strictFn();  // this === window 객체

document.onclick = strictFn; // this === window.document 객체

// 일급객체
// callback === cb
var fn = function (cb) {
  // 인자로 함수 데이터 유형이 전달되었다면 함수를 실행하라.
  if (typeof cb === 'function') {
    cb();
  } else {
    throw new Error('전달인자는 함수 데이터 유형이어야 한다.');
  }
}

// 자바스크립트 함수가 일급객체인 이유!
// 함수를 다른 함수의 인자로 전달할 수 있다. 
fn( function() {
  console.log('전달된 함수가 수행되었습니다.')
} );



function countDown(target_number) {
  if( typeof target_number !== 'number') {
    throw new Error('숫자를 전달하세요.');
  }
  var _num = target_number;
  var _countDown = function () {
      console.log('_num: ', _num--);
  }
  return _countDown;
}
// 내부 함수가 탈출 캡슐  리턴에 담으면 구출이 되는것.
var countDown10 = countDown(10);