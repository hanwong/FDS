###### Front-End Develop SCHOOL

# DAY 42

### LocalStorage
* setItem
* getItem
* removeItem
* key
* clear 
* 객체를 바로 저장할 수 없다.
  * 문자로 변환해서 저장해야 됨.
  * Object --> JSON String --> Object



### Angular JS
* `<` angle brace를 써서 angular
* IE8을 고려할 때는 1.2.x 버전을 사용해야한다.

#### package 관리
* bower - front관련 모듈
* npm - server관련 모듈
* `npm init -y` : package.json 자동 생성
* `-D` : 개뱔용, 

* `data-` HTML 속성에 `ng`관련 속성들 앞에 붙여서 표준을 지키자.
 * 커스텀 속성은 앞에 `data-` 을 붙이는 것이 표준이다.

* `data-ng-app` - Angular를 설정할 영역에 삽입하면 

#### [bootstrap process](https://docs.angularjs.org/guide/bootstrap)
* Angular가 Dynamic DOM(View)을 생성하는 과정

#### ng-model Directive
* `data-ng-init="model_name"`
* `data-ng-model` - Model , JSON 데이터를 가져온다.


#### Angular의 MVC??
* 중재자 패턴 - 
* Template - HTML
* Model - root Scope- ng app을 만나면 암묵적으로 생성된다. 
  * JSON, XML 과 같은 
* Controler가 Model에서 데이터를 가져다가 Template에 붙여 준다.
  * 컨트롤러가 스코프에게 모델을 전달하고 일을 시킨다.
  * 스코프가 템플릿에 가서 모델을 지정된 위치에 전달한다.

* Routes - UI와 Logic/Data를 연결해서 동작 시키는 일을 함.
  * M(UI) - VM($scope) - V(logic/data)
  * V(logic/data) - controller끼리는 서로 전혀 모르는데 factory/service 가 연결시켜 줌.

* Module은 Container
   * Module - 컨트롤러 라우트 팩토리/서비스 디랙티브 필터

   * 팩토리/서비스
    * 하나만 존재하는 객체, 싱글톤 객체
    * RESTful 서비스에 사용
    * 컨트롤러 사이에 데이터 공유에 사용
    * 사용자 정의 로직에 사용

  * 컨트롤러는 데이터와 뷰를 제어하는 역할, 중간에 스코프를 통해서만 가능, 컨트롤러에 주입되어 있음
    * 뷰를 제어하는 두뇌 역할
    * 팩토리/서비스를 이용하여 데이터 검색 및 보관
    * 뷰에 의한 이벤트 핸들링
    * 사용자 정의 로직에 사용
    * 뷰와 상호작용하는 스코프와 연결

  * 뷰는 사용자 인터페이스를 렌더링
    * 디렉티브와 필터를 가지고 있음
    * HTML/CSS를 포함
    * 컨트롤러에 연결된 스코프 객체를 통해 연결된 데이터를 처리
    * 디랙티브를 사용해 HTML을 확장

  * 라우트는 고유한 연결 주소에 컨트롤러/뷰를 연결
    * 연결 주소에 컨트롤러와 뷰를 각각 연결
    * 라우트 파라미터를 포함시킬 수 있음
    * 필요한 뷰와 컨트롤러를 불러와주기만 한다.
    

