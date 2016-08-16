###### Front-End Develop SCHOOL

# DAY 33

### 1. 자바스크립트의 데이터 유형

### 1.1 원시형 데이터 (primitive data)- 숫자, 문자, 논리, null, undefined

#### 숫자
* `isNaN`
  * 숫자가 아니냐를 검사하기 보다 숫자 인가를 확인하는 경우가 더 많다
  * 그러면 그에 필요한 함수를 만드는게 좋지 않을까?
```js
function isNumber (data) {
  return typeof data === 'number';
}
```

### 1.2 자료형 데이터 - 객체, 함수, 배열
> **리터럴**
  * 값 자체를 의미하는 것
  * x = 7 ( x: 변수, 7: 리터럴 )

#### 함수
* 선언식 - `function name () {}`
* 표현식 - `var name = function() {};`
* 별도의 객체를 낳는 객체(함수)가 있다.
  * 함수 생성자 함수를 사용하여 함수를 생성하는 방법, `new`를 사용하는 방법 ... 안쓴다...
  * `var name = new Fucntion('expression');`

#### 배열
* 집합 - 데이터들을 묶을 수 있다.
  * 여러 개의 변수를 만들지 않고도 하나의 변수에 배열 데이터를 참조함으로써 다수의 데이터를 관리할 수 있다. 
* 자바스크립트의 배열은 실제 배열이 아니다. 객체를 가지고 배열처럼 꾸민 것이다.
  * 그래서 `연관배열` 이라고해서 객체의 속성처럼 사용할 수 있다.
  * 노드리스트와 같은 `유사배열`에서는 forEach, pop 같은 배열의 메소드를 사용할 수 없다.
  * 아무튼 자바스크립트에서는 배열을 리터럴로 쓰는 것이 좋다.

#### 객체
* `Object.prototype.toString.call( data )` -  객체 타입 검사
* 프로퍼티(변수)를 객체 안에 추가 할 수 있음.
* 메소드 - 프로퍼티 값으로 설정되는 함수
* `delete` - 전역변수는 지울수 없다 , 일반적인 객체의 속성만 지울 수 있다.
  * 전역을 오염시키지 않는 것이 좋은 자바스크립트 코딩이다.

#### 정보분석
* `typeof` 의 오류
  * `array`의 결과가 `"object"`로 나옴
  * `null`의 결과가 `"object"`로 나옴
  * 정규표현식의 생성자, `Math`, `Date` 등의 함수도 `"object"`로 나옴,

* 생성자가 만들어낸 객체를 인스턴스라고 한다.

* `instanceof` - array는 구분해줌...

* `constructor` - 객체 유형의 데이터에서는 완벽하게 대답해준다.
  * 객체가 아닌 것은? 
  * `null`, `undefined`는 객체가 아니기 때문에, 
  * 생성자를 가지고 있지 않다, `constructor` 속성을 가지고 있지 않다.

**JavaScript Design Pattern**
* 타 객체의 메소드를 빌려쓰는 패턴
* `Object.prototype.toString.call( data )`
  * `.call` - 뒷부분의 data가 주체가 되고 타 객체의 메소드를 빌려오는 메소드
  * `.slice(8, -1)` 로 데이터 유형 값만 빼내옴
  * `Object.prototype.toString.call( data ).slice(8,-1)`

```js
function isType(data) {
  return Object.prototype.toString.call( data ).slice(8,-1).toLowerCase();
}
```

### 2. 연산자

* `%` - 나머지 연산자

```js
var message = ['html', 'css', 'sass', 'javascript', 'coffeescript']
undefined;
var count = 0;
message[count++ % message.length];
```

* `++`, `--` 증감 연산자
  * `while`문에 활용하기 좋다.
```js
while ( document.querySelectorAll('a')[i++] ) { ... }
```


### 3. 문장 - Statement

#### 조건문
* `if`
* `||`

>  참 거짓에 대해 단순히 값을 반환하는 조건문은 ||, &&  연산자를 활용해서 줄여쓸 수 있다.

```js
if ( !value ) {
  return value = 'block';
}
// 
value = value || 'block';
```

**삼항 조건식**
  * 조건 ? 참 : 거짓
  * 다중 삼항식

```js
var today = new Date().getDay();
var today_is = today === 0 ? '일' :
                      today === 1 ? '월' :
                      today === 2 ? '화' :
                      today === 3 ? '수' :
                      today === 4 ? '목' :
                      today === 5 ? '금' :
                      today === 6 ? '토' : '???';

console.log( '오늘은 ' + today_is + '요일 입니다.');
```

**switch ~ case 문**
```js
switch (조건) {
   case 값: 코드 실행;
   break;
   case 값: 코드 실행;
   break;
   case 값: 코드 실행;
   break;
   default: 위의 상황이 아니면 ...
}
```

