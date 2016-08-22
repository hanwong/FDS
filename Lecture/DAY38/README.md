###### Front-End Develop SCHOOL

# DAY 38

> 지역에서 참조할 변수를 만들고 참조하는것이 스코프 체이닝을 방지 할 수 있는 좋은 습관이다.
* [aria cheat sheet](https://www.w3.org/TR/wai-aria-practices/#combobox)

### jQuery 

* 메소드 체이닝 - JavaScript
  * 함수 내부에 return this로 끝난다.

* jQuery는 자바스크립트의 팩토리 패턴을 사용한다.
* jQuery 객체는 `$`를 붙여서 사용하는 습관이 필요하다.
  * jQuery 객체를 최대한 줄여주는 것이 효율적이다.
* `ready` static 메소드 - [ready](http://api.jquery.com/ready/)

* `$` 와 `$()` 는 다르다.
  * `$` - 함수
  * `$()` - 함수 실행 결과가 jQuery 인스턴스 객체가 된다., jQuery instance object
    * `jQuery.prototype.init` 이 실행 되면 객체를 반환함

* `this`, `$(this)` 
  * this는 이벤트가 연결된 button 문서 객체이다.
  * this가 참조하는 button 객체를 jQuery 객체화 시키는 방법은
  * jQuery() 팩토리 함수 내부에 this 참조 변수를 전달하여 jQuery 객체를 생성한다.
  * 생성된  jQuery 객체는 jQuery.prototype 객체가 가진 능력을 맘껏 사용가능하다.
  * `var $this = $(this);` - 이런 기능은 성능을 저하시킨다. 이벤트를 발생시킬 때 마다 객체를 생성하는 형태가 된다.

### jQuery Selector & Filter
> filter와 `is()`를 활용하여 조건을 잘 활용하여 탐색할 수 있다.

* `name:first` == `name:eq(0)`== `eq(0)`
* `name:last`  == `name:eq(0)`== `eq(len -1)`
* 그 외에도 sizzle 엔진의 prototype 을 활용하여 확장 가능하다.
* `$('a:nth-child(odd)')` == `$('a:even')`
* `$('a:nth-child(even)')` == `$('a:odd')`
* :contains("text")
```js
$('a').map(function(idx, el){
  if (el.value === 'text') {
    return el.value;
  }
});
```

* 화면에 보이거나 보이지 않는 요소를 선택한다.
  * `:visible`  - 
  * `:hidden`  -

* `:animated` - 

```js 
$('nav').hide(2000, function() {
  if( !$('nav').animated ){
    $('nav').show(3000);
  }
});
```

### jQuery Styling
* getter 함수 - `css('name')` 
* setter 함수 - `css('name' , 'value')` 
* css map - `css({ 'font-size': '+=10px', 'margin-left': '1em'})`
* callback - `css('key': function(){  return  })`

document.

