###### Front-end Development School

#DAY 11

## Float 실습 복습

```css
body *, body *::before, body *::after {
  box-sizing: border-box;
}
```

* `box-sizing` 박스의 `width`를 `border`까지 확장 할 수 있도록 사용한다.
  * `padding`, `border`의 변화에도 레이아웃이 무너지지 않도록 하기 위해 사용한다. 

```css
html {
  overflow-y: visible;
  font-size: 10px; 
}
```

* `overflow-y: visible;` - windows환경에서 브라우저의 사이드 영역에 스크롤바 영역을 기본적으로 차지함.
* rem단위로 계산하기 쉽도록 하기 위해서 10px 사용

* `::selection`은 그룹 선택자를 쓰면 적용이 안됨.
* font 속기형은 ie11이상 지원, 하위 호환을 위해서는 풀어써야됨.
* 


## CSS 레이아웃 속성
* `box-sizing` 
    * box model 의 width값의 기준 요소를 설정하는 속성
    * `content-box`,`padding-box`,`border-box`
    * `padding-box`는 파이어폭스에서만 지원됨.
    *

* **`position`**
  * `static` 
    * 모든 요소의 기본값으로 설정되어 있음
    * 다른 요소의 `position` 속성을 해제할 때 사용하면 좋음.
    * 스크립트의 이벤트에 따라서 적용 및 해제하면서 사용할 수 있음.

  * `relative`
    *  `top`, `bottom`, `left`, `right`
    * 주는 속성에 따라서 기준이 바뀐다. 
    * 박스의 normal flow를 깨지 않는다. 다른 요소에 영향을 주지 않는다. 자신 요소만 이동을 한다.
    * `+` 값은 기준 안쪽으로, `-` 값은 기준 바깥쪽으로 이동.
    * 자신을 기준으로 상대적인 값 적용.
    * `z-index` - 다른 요소의 상위에 띄울 수 있음

  * `absolute`
    * 기본적으로 normal flow를 깬다.
    * 부모한테 상대적, 부모의 `position` 자격이 있어야 한다. 부모의 요소가 `static`만 아니면 된다.
    * 나랑 가장 가까운 부모를 기준으로 한다. `js - offset parent`

  * `fixed` - ie6에서 지원 안됨
    * 상단 네비게이션을 스크롤 하면 고정할 때? footer가 스크롤 하면 다시 올라올 때


* **normal flow - html 은 마크업된 순서대로 쌓이게 된다.**



## Vertical Rhythm

* Headings
* Paragraph
* Lists
* Table

* CSS로 가이드 라인 그리기
  * Gradient type, Stops, Location 의 원리로 그리게 된다.
  * `background-image:` 
    * `linear-gradient(angle, color-stop 0%, color-stop, ... , color-stop, color-stop 100%)` 선형 그레디언트를 사용한다. 
    * 시작, 끝 색을 으로 50% 50% 하면 색이 나눠짐.
    * 