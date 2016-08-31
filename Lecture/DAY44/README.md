###### Front-End Develop SCHOOL

# DAY 44

### AngularJS

* [v1.2.x,  IE 8 호환]
* jQuery와 유사한 jqLite를 Angular컨트롤러 내부에서 사용하는 예

```js
var template_headline = document.querySelector('.ng-template-headline');
template_headline = ng.element(template_headline);
console.log(template_headline);
```

#### Module
* Filter, Directive를 커스텀하여 만들 수 있다.
* Factory, Service

* Controller
  * scope를 쓰는 방법
```js
  app.controller('demoCtrl', function($scope) {
    // 비공개 멤버
    var headline = 'this App maked Angular';
    // 공개
    $scope.headline = headline;
  });
```

  * as를 쓰는 방법
```js
  app.controller('demoCtrl', function() {
    // 비공개 멤버
    var headline = 'this App maked Angular';
    // 공개
    this.headline = headline;
  });
```

#### 코드 압축 과정에서 주입된 $scope 모듈이 변경되는 것을 방지
  * 방법 1 - 함수 외부에 별도로 `$scope`를 인젝트한다.
  ```js
  ngCtrl.$inject = ['$scope'];
  ```

  * 방법 2 - 컨트롤러 생성시에 `$scope`를 인젝트한다.
  ```js
   ng.module('ngApp')
     .controller('ngController',['$scope', ngCtrl]);
  ```


#### Scope
* 중첩된 컨트롤러에서는 스코프 체이닝이 일어난다.

> 앵귤러는 모델이 갱신되면 바로 뷰를 갱신한다.

#### Service
* 여러개의 컨트롤러를 연결해서 하나의 컨트롤러에서 모델을 수정하면 다른 연결된 컨트롤러가 모델도 같이 변경된다.
* 


#### JS 로딩 환경
* CommonJS - 어떤 환경에서도 자바스크립트를 로딩할 수 있는 환경을 만들어줌.
* AMD - 프론트엔드 환경에서 자바스크립트를 로딩