###### Front-end Development School

# DAY 26

### ECMAScript - JavaScript의 역사

* JavaScript의 아버지 - Brendan eich
  * brendaneich.com
  * javascript.next
* 개발 초기 코드 네임은 모카
* 넷스케이프에 탑재할 공식 이름은 라이브스크립트
  * 엔터프라이즈 서버에서도 적용해서 동작하게 하고자 하는 것이 목표 였었음.
  * 최종적으로 정한 이름은 자바스크립트 - 자바의 인기에 편승하기 위해서...
    * 이때 부터 오해를 받게 됨.
    * 공개가 되서 가져다 붙이는게 당여한 것으로 여겨지는 언어가 됨.
* JavaScript(1994)가 CSS(1998)보다 먼저 생겼음.
* 지금 현재 쓰고 있는 버전은 대부분 262-3 버전임.
* 2005년에는 E4X로 새로운 탈바꿈 하려다가 내부적인 싸움으로 262-4 버전은 사장됨.
* 2009년에 262-5 버전이 나옴 - NodeJs가 시작됨 - 모든 환경에서 쓰고자하는 환경이 시작됨.

* js는 interpreter언어라서 느리다...엔진이 느리면 느릴수 밖에 없다.
  * 크롬의 엔진이 너무나 뛰어나서, 크롬이 등장하면서 엔진이 비약적으로 성정하게 됨.
  * 그래서 등장한 것들이 싱글페이지어플리케이션 프레임웍들이다.
  * 

더글라스 크락포드 - 자바스크립트 핵심 가이드
윤인성 - 모던 웹 자바스크립트
웹동네 - 자바스크립트


### JavaScript

1. DOM - 문서 객체 모델
2. EcmaScript - 코어
3. BOM - 브라우져 객체 모델

* 문서를 가지고 제어하는 것이 중요하다.
* 그래서 DOM이 중요하다.


### BOM

> * 객체의 속성은 브라우져마다 다르게 지원될 수도 있다.
* 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 덮어쓴 값이 출련된다. (자바스크립트의 태생적 한계)
* 초창기 자바 스크립트 환경에서는 문법이 엄격할 수 없었다.
* dot syntax


repenting reflow
엄마 아빠 자식 자손 가계도를 모델이라고 한다.

#### window 객체 관련 속성
* window.devicePixelRatio
* window.innerWidth
* window.scriollX
* window.pageXOffset
* window.scriollY
* window.pageYOffset
* window.alert();
  * 함수 이름은 모두 동사 형태이다.
* window.confirm();
* window.prompt();
  * 사용자의 입력 값을 받아 왔다면, 이를 기억해두기 위한 변수가 필요하다.
* window.open();
* 크롬에서 지원 안됨 - 안쓰는게 좋음
  * window.resizeTo(); // 절대값
  * window.resizeBy(); // 상대값
  * window.moveTo(); // 절대값
  * window.moveBy(); // 상대값
  * window.scrollTo(); // 절대값
  * window.scrollBy(); // 상대값

* window.setInterval(할일, 시간); //주기마다 계속 반복 // 이건 CPU를 사용
* window.setTimeout(할일, 시간); //1회
  * 할일에는 함수를 지정하여 사용할 수 있다. 
* window.clearInterval - 변수에 할당을 해놓고 해당 변수에 설정된 이벤트를 멈출때
* window.requestAnimationFrame(); //GPU를 사용하기 때문에 좀 더 유려한 애미메이션을 보여줄 수 있음

#### location 객체 관련 속성
* window.location. --- 윈도우 내의 객체이지만 전역 객체는 생략해도 된다.
* loaction.href
* loaction.protocol
* loaction.hostname
* loaction.port
* loaction.search
* loaction.hash
* loaction.pathname
* loaction.replace  - 페이지 이동
* loaction.reload
html 태그 안에 javascript: ~로 쓸 수 있는데 레거시 코드이니 보는 족족지우자

#### history
* window.history
* histroy.length
* histroy.back();
* histroy.forward();
* histroy.go();
* histroy.pushState();
* histroy.replaceState();
* histroy.state();

#### screen
* window.screen
* screen.width
* screen.height
* screen.availWidth
* screen.availHeight

* screen.orientation.angle
* screen.orientation.onchange

#### navigator - 브라우저의 정보를 다룸, 어플리케이션 이름, 장치 정보 등등등...
* window.navigator
* navigator.userAgent - 브라우져 스니핑
* navigator.vendor
...

#### document - 
* window.document
* document.title
* document.doctype
* document.compatMode - CSS1Compat 이 표준
  * CSS1을 지원하는게 표준이라고 정의를 했었음. 1996년...
* document.activeElement - 포커싱된 요소를 가리킴
* document.cookie
* document.write

> * `()`는 함수를 직접 실행하는 실행 연산자이다.
* 이벤트가 처리할 때는 실행 연산자를 붙이지 말아야 한다. 실행을 바로 하는것이 아니라 함수를 가리키면 되는 것이다.