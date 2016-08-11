###### Front-end Development School

#DAY 12

## 타이포그래피

* 모듈러 스케일 - 관계된 객체간에 일정한 배율을 가지고 있는 것.
* 베이스 라인 - 일정한 간격을 통해 규칙을 잡는 것.
  * 기본 규칙을 지키면서 중요한 요소에 특별한 포인트를 가져가는 것이 좋다.
* 버티컬 리듬 - 각 요소 간의 수직적인 공간 배열 관계
  * 결과물을 수치로 옮길 때 ... 좋다~
  * 결과의 목표는 사용자가 읽기 쉽게 만드는 것이다. 
  * 주변환경에 상관 없이 리듬을 유지할 수 있다. 


## Position

**position properties**
* `stattic` (Default)
* `relative` (self) * 일반 흐름(Normal Flow)을 깨지 않는다.
* `absolute` (offsetParent)
  `offsetParent` 란?
  * 자식요소를 포함하는 가장 가까운 부모요소 중에 `position` 속성이 `static`이 아닌 부모 요소
    * 일반 흐름(Normal Folw) 에서 벗어난다. (`float`과 유사해 보임)
    * `display` 속성 값이 `block`으로 변경된다.
    * `absolute` 적용된 요소의 부모에 `relative`를 설정하는 이유!
      * `relative`는 일반 흐름을 깨지 않아서
    * `Float`과 차이점!
      * `Float`의 경우는 부모요소가 `Float`된 요소를 감싸게 하는 방법이 있지만,
        absolute의 경우는 별도로 height 높이를 제공해야 한다.
      * `float`은 normal flow에 영향을 주지만 `position`은 영향을 주지 않는다.
      * 성능이슈 - `float`은 큰영향이 없지만 `position`은 많이 쓸 수록 성능에 영향을 미친다.
      * `float` 은 `z-index`를 적용할 수 없다.
* `fixed` (기준: screen, viewport)
  * 기본적으로는 absolute와 유사하게 처리되어 보이나, 처리 결과는 다르다.
  * 고정 형태로 위치가 설정된다. 화면 스크롤과 상관 없이 항상 그 자리를 유지한다.
* `z-index` 속성의 경우는 반드시 `position` 속성(static 제와)과 함께 사용된다.
  * `z-index` 속성 값은 양의 정수, 0, 음의 정수 사용이 가능.
  * 단, 설정 시 1단위가 아닌 10 또는 100 단위로 설정하는 것이 유지보수 관점에서 권장된다.
**※ 특징! [부모 A, [자식 C]] + [부모 B, [자식 D]]**


* webfont icon 
  * [font awesome](http://fontawesome.io/)
  * Accessiblity
    * `aria-hidden = "true"` - 라벨이 있을 경우 사용
    * `aira-label = "name"` - 라벨이 없을 경우 사용


* CSS Center Position

```css
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
```

* fixed
  * 

## CSS Background

* 멀티 백그라운드

```css
 background: bg, bg, bg, ... ;
 background-size: size, size, size, ... ;
 ```

* vignette 효과

```css
background: radial-gradient(circle, transparent, #000);
```
