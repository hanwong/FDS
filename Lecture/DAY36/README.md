###### Front-End Develop SCHOOL

# DAY 36

* Hoist를 이해하지 못하면 본인이 생각한데로 돌아가지 않을수 있다.

* 클로저는 참조하는 변수를 사라지지 않게 하는 목적도 있지만.
* **크로스브라우징 시에 조건에 따라 조건을 항상 확인해야 하는 함수의 호출 횟수를 한번만 하게 되면서 프로그램의 효율성을 높이는 목적도 있다.**

### 객체
* JavaScript의 함수는 구문을 실행시키는 역할도 하고, 객체를 생성시키는 생성자 역할도 한다.
* 객체 인스턴스 - 생성자를 통해 생성된 객체

```js
function Coffee (name) {
  this.name = name;
}

var americano = new Coffee('아메리카노');
var capuccino = new Coffee('카푸치노');
var latte = new Coffee('라뗴');

americano.constructor === Coffee  // true

americano.__proto__ === americano.constructor.prototype // ture
```

* 생성자 역할 함수 - 이름 짓는 관례상 첫글자가 대문자가 작성된다.
* 모든 함수는 프로토타입으로 연결 가능한 객체가 있다.
* 메소드 체이닝 - 뭘 리턴 하나에 따라서 그 객체의 메소드를 사용할 수 있다.
* 네이티브 객체를 사용하면 동일한 일을 수행할 때 리터럴을 사용해서 생성자를 쓰는 것과 같은 결과를 얻을 수 있기 때문에 **용이한 리터럴을 쓰자는 것이다.**