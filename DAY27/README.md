###### Front-end Development School

# DAY 27

### DOM - 문서객체모델
* DOM을 이용하여 문서의 요소를 선택하고, js를 이용하여 이벤트 핸들링 및 조작하는것.
  * 요소, 이벤트, 함수 - 각각을 바인딩~ 연결 시켜준다.
* Doument - 도규먼트, 문서
* Object - 객체,
* Model - 모델, 관계구성

* ES가 하는 일 - 탐색(트레버스), 조작(메뉴퓰레이션)
  * 브라우져에서는 모든 것을 노드로 해석함, 노드(연결망의 특정 지점), 루트 노드(노드 트리의 시작)
* 문서 - 노드의 집합
  * 요소 노드 (element node)  - 1
    * 요소에는 유형을 체킹하는 방법이 있다.
  * 속성 노드 (attribute_node) - 2
  * 텍스트 노드 (text node) - 3
  * 요소를 사용하기 위해서는 꺼내야 사용할 수 있다. 
    * 각 요소는 배열과 유사한 형태로 구성됨.
    * `getElementsByTagName`, `item(0)`, `[0]`를 이용해서 뽑아냄.
  * `firstChild`, `nodeValue` 
  * `nextSibling` - 탐색~
    * `innerHTML`

### DOM - Method
* getElementById() - id 속성을 찾는다.
  * id는 한 문서 내에서 같은 이름이 있으면 안된다.
  * 바로 요소를 꺼내 쓸 수 있지만 id에 대한 관리가 필요하다.
* getElementsByTagName()
  * Elements 는 배열로 저장되기 때문에 해당 위치를 지정해줘야 요소를 꺼내 쓸 수 있다.

### DOM - Event, Event Handler
* **이벤트에 연결된 함수를 이벤트 핸들러라고 한다.**
  * onclick = function() { ... }
* 이벤트 속성의 초기 상태는 모두 비어있다. 
  * 그래서 함수로 연결하면 채워지는 것이다.
* onmouseover는 좋지 않다. - onmouseenter가 좋다.
  * 이벤트에 따라 스타일을 변경할 수 있다. 

> **컨텍스트**
* this 

> 문서대상.이벤트 = 할일(함수);
 * `event = func();` // function의 리턴 값을 이벤트에 저장
 * `event = func;` // 이벤트 때 function을 실행


### DOM Level 0
>* 레거시 돔
* 새로운 레벨이 나와도 사람들이 이전 레벨을 많이 써서 새로운 레벨을 쉽게 쓸 수 있게 해주는 것들이 jQuery같은 라이브러리들이다.


