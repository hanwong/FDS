###### Front-End Develop SCHOOL

# DAY 34


### 함수

#### Scope
* Scope Chain - 내부에 참조할 수 있는 객체가 없으면 상위 스코프로 계속 올라간다.
  * 찾는 순서 - 1. 지역변수, 2. 매개변수, 3. 상위 스코프
  * 거슬러 올라가게 하는 것은 느리게 하는 원인이다.

```js
//호이스팅 질문
var boo = true; //전역 변수
var isScope = function(){
  
}


### 반복문

#### while
* 재귀함수 - 나를 다시 호출하는 함수 

```js
var boo = true, m= 10;
while (boo) {
  console.log(boo ? '참참참' : '짝짝짝');
  if (m-- < 0) {
    boo = !boo;
  }
}
```

#### do-while

```js
var boo = true, m= 10;
do {
  console.log(boo ? '참참참' : '짝짝짝');
  if (m-- < 0) {
    boo = !boo;
  }
} while (boo);
```


* 이름 공간 네이스페이스 객체를 활용한 라이브러리 만들 예정


#### for ...

```js
for( var boo = false, i = 0; i < 10 ; i++ ) {
//  if ( i === 9 ) {
//    boo = !boo;
//  }
// ↓ 위 코드는 아래처럼 변경 가능하다.
//  boo = i === 9 ? !boo : boo;
//  console.log(boo ? '참참참' : '짝짝짝');
// ↓ 코드를 병합하면 아래와 같이 된다.
  console.log( (i === 9 ? !boo : boo) ? '참참참' : '짝짝짝');
} 
```

**continue**
* 탐색하는 요소 내에 필요 없는 요소를 골라낼 때에 사용

```js
var fruits = [ '바나나', true, '딸기', false, '포도', null, '수박' ];
fruits.push( function(){} );
fruits.push( { 'name' : 'object' } );

var real_fruits = [],
    fruit,
    k = 0,
    o = fruits.length;

for ( ; k < o ; k += 1) {
  fruit = fruits[k];
  if ( isType(fruit) !== 'string' )  {
    continue;
  }
  real_fruits.push(fruit);
}
```

* nodeName - 대문자 반환, localName - 소문자 반환

```js
collection = document.body.childNodes;
for ( var el_collection = [], i = collection.length - 1; collection[i]; i-- ) {
  let node = collection[i];
  if (node.nodeType === 3 || node.localName === 'script') { // #text, 'script' O
    continue;
  }
  el_collection.push(node);
}

```

**break**

```js
function getUnit(value) {
  var i=0, l=getUnit.units.length, unit;
  for ( ; i < l; i++) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1) {
      break;
    }
    // reg = new RegExp('\\d+' + unit, 'i');
    // if (reg.test(value)) {
    //   break;
    // }
  }
  return unit;
}
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');


// ECMAScript 2015 < for ~ of >
// for (let unit of units) {
//   // statement
// }
```

#### for ~ in
* length를 사용할 수 없는 객체의 속성을 확인할 떄 사용한다.
* 배열에는 prototype chaining 으로 돌아가기 때문에 느리므로 절대 쓰지 않는다.
  * javascript garden

* in 을 사용할 때는 조건문을 꼭 활용해야 한다!!! `hasOwnProperty`
  * 소유하고 있는 속성만 물어봐야 한다.
  * 확인하지 않으면 조상 요소까지 가서 확인한다.

```js
for ( var property in obj ) {
  if ( hasOwnProperty(property) ){
    console.log('속성: ', property);
    console.log('값: ', obj[property]);
  }
}
```



