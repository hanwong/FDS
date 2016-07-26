###### Fr트nt-end Development School

#DAY 23

## Sass

프론트엔드는 성능~

* @import  - **Extension**
  * 미디어 쿼리 타입, 링크, 파일도 추가 할 수 있음
  * import  구문이 어디에 위치해도 상관없음. 그 위치에 해당 코드들이 병합이됨.


```sass
.example {
  color: red;
}

#main {
  @import "example";
}
would compile to

#main .example {
  color: red;
}
```

* 중첩 - Nested @import
  * 클래스 안에서  @import로 직접 불러오면 해당 선택자에 추가 되어 CSS에 선언된다.
  * 여러 페이지가 있을 때, 각 페이지에 모듈을 다르게 적용할 때 쓰는 것

* `$변수 !default`
  * 사용자가 정의한 변수가 없으면 기본값으로 사용하겠다고 하는 것임


#### Scripts

* Sass 변수는 변수 이름 앞에 $ 기호를 붙인다.
  * Sass 변수 이름 작성 규칙
    * 변수 이름 사이에 공백을 사용하지 않는다.
    * 변수 이름의 음절 사이에 `-`, `_` 등을 사용한다.
    * 만약 프로그래밍에 익숙해서 camelCase 방식이 익숙하다면 사용해도 좋은데,
    * 다만, camelCase 표기식은 일반적으로 함수 이름에 사용되기 때문에 권장하지 않는다.
    * `-`, `_` 가 다르게 입력되어 있어도 오류가 나지 않는다. 

* Sass 변수는 끌어 올리는 것이 안되기 때문에 반드시 상위에 정의 되어야 한다.

* Data Type
  * Null Number, String & Color, Boolean, list, map
  * Number - 숫자형
  * String & Color - 문자형
  * Boolean - 논리형 (참, 거짓)
  * list - 
  * map - 