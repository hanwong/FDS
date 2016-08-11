###### Front-end Development School

# DAY 22

## Sass (Syntactically Awesome Style Sheets) 
* Pre Processor
  * 웹 브라우저는 Processor 
  * Sass는 웹 브라우저가 해석하기 이전에 CSS로 변경해주는 Pre Processor

 [Sass 변환 사이트](css2sass.herokuapp.com)

* Sourcemap - Source Navigation
  * 어떤 Sass 파일에 문제가 있는지 알려주는 툴 
  * `node-sass -wo sass css --output-style expanded --source-map map`

* 중첩 규칙
  * `&`
    * 기본적으로 중첩된 구조 내에서 `&`을 사용할 경우, 부모를 창조하는 형태로 사용되나...
```sass
.page
  .page-header
    position: relative
    height: 20vh
  .brand
    overflow: hidden
    position: absolute
    left: 0
    a 
      color: #6666FF
      .ho-woo &:hover
        color: #CC66FF
  &-sample
    a
      color: #FF6FCF
      &:focus
        color: #D56FC7
```
  * `&` 앞에 클래스를 삽입하는 것은 페이지의 최상단 클래스에 따라 다른 스타일을 적용할 때 주로 사용한다.
  * `&-name` 별도의 모듈이 필요할 때 사용한다.

* Sass 중첩 규칙 + 미디어 쿼리

* `@extend` - 선택자 상속

* `%` - placeholder 
  * class를 쓰지 않고 class를 상속받는다...
  * 붕어빵 틀