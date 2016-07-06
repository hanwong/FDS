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
* stattic (Default)
* relative (self) * 일반 흐름(Normal Flow)을 깨지 않는다.
* absolute (offsetParent)
  `offsetParent` 란?
  * 자식요소를 포함하는 가장 가까운 부모요소 중에 position 속성이 static이 아닌 부모 요소
    * 일반 흐름(Normal Folw) 에서 벗어난다. (float과 유사해 보임)
    * display 속성 값이 block으로 변경된다.
    * absolute 적용된 요소의 부모에 relative를 설정하는 이유!
      * relative는 일반 흐름을 깨지 않아서
    * Float과 차이점!
      * Float 의 경우는 부모요소가 Float된 요소를 감싸게 하는 방법이 있지만, absolute의 경우는 별도로 height 높이를 제공해야 한다.
* `fixed` (기준: screen, viewport)
  * 기본적으로 


* webfont icon 
  * [font awesome](http://fontawesome.io/)
  * Accessiblity
    * `aria-hidden = "true"` - 라벨이 있을 경우 사용
    * `aira-label = "name"` - 라벨이 없을 경우 사용


