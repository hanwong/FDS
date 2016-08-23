###### Front-End Develop SCHOOL

# DAY 39

### REVIEW

* HTML5 문서에서 `<h1>` 요소는 섹션 요소를 활용하여 상하 관계를 지정할 수 있다.

* **`this` 컨텍스트 참조 변수**
  * 자바스크립트 언어는 영역(Scope)을 가진다.
  * 영역으로 구분되는 공간은 크게 전역(Global Scope)과 지역(Local Scope)이 있다.
  * 자바스크립트에서는 if, while, do ~ while, for 문 같은 블록문(`{}`) 내부는 영역이 아니다.
  * 함수 데이터 유형의 블록문(`{}`) 내부에서는 공간이 형성된다.

```js

// this -> 전역 콘텍스트 객체를 가리킨다.
console.log('전역에서 실행한 this:', this); // 결과: window object

if (true) {
  console.log('if 블록문 내부에서 실행한 this:', this); // 결과: window object
}

function myFn() {
  console.log('함수 myFn() 내부에서 실행한 this:', this);
}

myFn(); // 결과: window object
// 이유: myFn() 실행시킨 콘텍스트 객체가 암묵적으로 window 객체로 설정되기 때문
// myFn() === window.myFn();

function meFn() {
  'use strict';
  console.log('함수 meFn() 내부에서 실행한 this:', this);
}

meFn(); // 결과: undefined
// 이유: 엄격 모드(strict mode)에서는 기존의 설계 오류를 해결하기 위해
// 더 이상 암묵적으로 전역 콘텍스트 객체인 window에서 실행한 것처럼 처리하지 않기 때문

window.meFn(); // this.meFn(); // 결과: window object
// 이유: 엄격 모드(strict mode)에서 실행 시, 명시적으로 실행 콘텍스트 객체를 설정하면
// this는 명시적으로 설정된 실행 콘텍스트 객체를 가리키기 때문

// ----------------------------------------------------------------------

var demo1 = document.querySelector('.demo1');
var demo2 = document.querySelector('.demo2');

demo1.onmouseenter = myFn; // 결과: this === demo1

demo1.onclick = function() {
  myFn(); // 결과: this === window object
  myFn.call(this); // 결과 this === demo1
};

demo2.onmouseenter = meFn; // 결과: this === demo2

demo2.onclick = function() {
  meFn(); // 결과: this === undefined
  meFn.call(this); // 결과 this === demo2
};

```
* jquery this
  * 이벤트 객체를 참조할 때는 this를 괄호로 감쌀 필요가 없다.
  * `이벤트에 객체를 합성`하여 jquery this를 호출하기 위해 매번 jquery객체를 생성할 필요가 없다.
    * 객체 합성 $.extend(obj1, obj2) - obj1에 obj2가 합성됨.
  * 외부에서 참조할 변수들을 객체로 합성하여 사용한다.
  `$demo1.on('mousedown', {'$this': $demo1}, function(evt){ });`
  * gof 객체 합성


### jQuery

* 배열의 각 요소에 이벤트를 바인딩 하는 과정을 효율적으로 리팩토링 하는 과정

```js
  $letters.on('mouseenter',  function(){
     $(this).css('background', '#ff0');
  });

  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  $letters.each(function (index, item) {
     var $this = $letters.eq(index);
     $this.on('mouseenter', function () {
        $this.css('color', '#52c88c');
     });
  });
  
  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  $letters.each(function (index, item) {
     var $this = $letters.eq(index);
     $this.on('mouseenter', $.proxy(letterOvers, $this)); 
  });
  function letterOvers () {
    this.css('color', '#52c88c');
  }

```
* .proxy =  bind를 추상화해서 만든 함수


* **부모에게 이벤트를 걸게 되면 자식에게 이벤트가 전파된다.**

* 인스턴스 메소드 - 객체 인스턴스가 사용할 수 있는 메소드, 프로토타입에 연결된 메소드
* 정적 메소드 - 생성자를 통해서만 사용할 수 있는 메소드

* new 를 강제화 시키는 생성자 함수 패턴
```js
function f () {
  if (this.constructor !== f) {
    return new f();
  }
  console.log(this);
}
```

