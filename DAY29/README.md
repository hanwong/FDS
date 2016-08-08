###### Front-end Development School

# DAY 29

### QUIZ 관련
* Object - 생성자 함수, Constructor, 모든 객체의 조상
  * 객체는 모두  object에서 시작함. 
  * HTML 문서를 해석하면서 전부 객체화 시킨다.
  * 모든 객체의 종( 소유한 능력 ), 객체의 소유한 능력을 
  * 모든 객체가 공통적으로 가지고 있는 능력이 있다.
    * .toStrong() - 모드 객체가 가지고 있어야만 한다.
    * Number, String, Boolean, Array, Function. Math ... - 나열된 객체 생상자로부터 태어난 객체(인스턴스)를 통해 확인(검증)
    * 객체 - {} 
    * Number - !!(2016).toString
    * Function - !!(function(){}).toString
    * `( )` - data를 랩핑하는 개념


### DOM
* `children` - 모든 요소 노드만 가지고 온다.
* **`nodeName`, `nodeType`, `nodeValue` 를 기억하자!!**
  * `nodeType` 
    * `ELEMENT_NODE` = 1
    * `TEXT_NODE` = 3
    * `COMMENT_NODE` = 8
  * `nodeName`
    * `ELEMENT_NODE` 의 경우는 요소 이름을 대문자로 반화
    * `TEXT_NODE` 의 경우는 `#text` 반환
  * `nodeValue`
    * `TEXT_NODE` 의 경우에만 접근이 가능
    * `ELEMENT_NODE` 는 null이 반환됨

* DOM API - Traversal Properties
  * 엘리먼트만 바로 찾을 수 있음. IE9 이상 지원
  * `firstElementChild`, `lastElementChild` 
  * `nextElementSibling`, `previousElementSibling`
  * `parentElement`

-

### Node Information

* 웹의 초창기 때부터 존재하던 속성들이다.
  * `id`
  * `className`
  * `title`

* 새롭게 등장한 속성들
  * `data-*`, `aria-*`, `role`
  * `getAttribute('_')`을 사용해야 한다. 

* nodeName, nodeType, nodeValue
* hasChildNodes()

### Node Method

* `getElementById`
* `getElementsByTagName`
* `getElementsByClassName`
  * NodeList 를 반환함 - Like Array
  * // document.links; - HTMLCollection - Like Array

* 앞에꺼 쓸 필요 없음. 이것만 쓰면 됨... - IE8+
  * `querySelector('selector')`
  * `querySelectorAll('selector')`
  * `querySelector('selector') === querySelectorAll('selector')[0]`
  * jQuery  ver1. 은 쓰지 않는게 좋다... 이게 jQuery보다 빠름.

-

### Node 만들기
* 생성만 하고 실제 구현된 상태는 아님.
* `createElement('')`
* `createTextNode('')`
* `createAttribute('')`  - 얘는 별로 쓸 일 없음...

### Node 조작
* `부모노드.appendChild(자식노드)` - 무조건 노드 노드가 들어와야 됨.
* `insertBefore(insert, target)`
* `removeChild(node)`
* `replaceChild(alternate, target)`
* `cloneNode(boolean)`
* `innerHTML`
