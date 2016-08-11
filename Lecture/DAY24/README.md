###### Front-end Development School

# DAY 24

## Sass - Data Type

* Data Type
  * Null Number, String & Color, Boolean, list, map
  * Number - 숫자형
  * String & Color - 문자형
  * Boolean - 논리형 (참, 거짓)
  * list (array) - 
  * map (object) - 

* Operations
 * `+`, `-`, `*`, `/`- 사칙연산
 * `%` - 나머지
 * `==`, `!=`, `>`, `<`, `>=`, `<=` - 조건 연산자
  * 단위를 단위로 곱하면 안됨. 
  * 단위를 없앨때는 단위를 단위로 나눔
  * 사칙 연산에 다소 불규칙함이 있음
  * **인터폴레이션 방법을 이용해야 함**

**인터폴레이션 보간법 -> 문자를 접합(용접과 비슷)**

```sass
@import url("http://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-#{$spoqa-language}.css")
```

* 문자 연산
  * 문자를 접합함하는 경우 `n + -size`
  * 공백으로 구분된건 list로 처리함.
  * 공백이 있을 경우 `" "`를 붙인다.



* Debug
  * `@debug` 디렉티브(지시자)를 사용하면 명령 창에 디버그 결과를 출력한다. 

```sass
@debug red == #f00
@debug type-of(red)
```

* list - 배열과 비슷한것
* list functions
  * `length($list)` - 반복구문을 처리하기 위해서 필요함.
  * `nth($list, $n)` - 특정 순서의 요소 출력
  * `append()` - 뒤에 붙이는거
  * 등등등
  [list functions](http://sass-lang.com/documentation/Sass/Script/Functions.html#list-functions)

### MIXIN
* 믹스인은 코드를 반복해서 사용한다.
  * `%`플레이스홀더를 쓰면 선택자가 하나로 묶고 코드를 한번만 사용해줌.
  *  하지만 유지보수 측면에서는 믹스인이 나음
  * 그래서 용량이 커지면 처리속도는 플레이스홀더가 나음.
* 초기화 시켜주는 모듈을 사용하기에 좋다.
* 믹스인은 확장성이 좋다. 
  * 전달인자(arguments)를 삽입할 수 있음
  * 동적인 믹스인은 전달된 인자에 따라 스타일이 변경이 가능하기 대문에 활용성이 향상된다.
  * 키워드 전달인자 - 특정인자만 선택해서 값을 설정한다.
  * 멀티 전달인자 - 전달할 인자의 개수가 고정된 경우, 응용하여 활용하기 불편함. 
  * 가변 전달인자 - `...` 을 쓰면 여러 값을 넣을 수 있음.

* Sass에서는 
  * `@mixin`을 `=`으로
  * `@include`을 `+`으로 표기할 수 있다.

* `@content` 
  * 콘텐츠 블록 - 믹스인 내부의 요소 리스트까지 확장할 수 있다.











-

## TEAM ACTIVITY

* 현정
  * 이전 리소스의 CSS 파일을 SCSS로 변환
  * placeholder 사용
  * 로고 이미지를 가장 먼저 마크업 하고 탭키로 옆에 메뉴들로 이동하도록 마크업 진행할 예정

* 혜정
  * 로고 텍스트를 먼저 마크업하고 순서대로 마크업함, 피자 이미지는 그냥 이미지로만 마크업
  * 밑에는 각 섹션 별로 영역을 잡아줌
  * 메뉴가 달라지는 뷰를 적용하기 위해서 IR을 쓰는지 display:none을 쓰는지 정확히 몰랐다. 
    * IR은 이미지에 텍스트를 안보이게 하기 위한 방법, display:none으로 사이즈에 따라 다르게 보여준다.

* 윤상
  * page top에 내비게이션 메뉴 등 요소들을 추가함
  * direction button , 슬라이드 이미지를 이동하는 버튼 
  * 나머지는 섹션으로 나눔, picture, intro, 슬로건 등으로 나눔
  * 섹셔닝 하는게 어떻게 시멘틱한건지 잘 모르겠다...
    * 어떤것이 메인을 의미하는지 모르겠다.
    * 슬라이더 이미지와 아래의 정보들이 연결이 되지 않는것 같다.
  * 헤더 부분을 Sass 로 시작함.
    * BG이미지를 컨테이너로 줌

* 한웅
  * header, slider, main, footer 안에 섹션들로 나눠서 마크업 함.
  * style.sass를 만들고 각 섹션의 스타일을 적용하기 위한 Sass 파일을 각 섹션 별로 만들어줌.
  * 추가적으로 variable, font, grid 등을 나눠서 작성할 예정