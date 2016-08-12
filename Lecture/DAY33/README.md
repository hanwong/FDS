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
