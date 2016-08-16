var boo = true, m= 10;
while (boo) {
  // console.log(boo ? '참참참' : '짝짝짝');
  if (m-- < 0) {
    boo = !boo;
  }
}

var boo = true, m= 10;
do {
  // console.log(boo ? '참참참' : '짝짝짝');
  if (m-- < 0) {
    boo = !boo;
  }
} while (boo);


for( var boo = false, i = 0; i < 10 ; i++ ) {
//  if ( i === 9 ) {
//    boo = !boo;
//  }
// ↓ 위 코드는 아래처럼 변경 가능하다.
//  boo = i === 9 ? !boo : boo;
//  console.log(boo ? '참참참' : '짝짝짝');
// ↓ 코드를 병합하면 아래와 같이 된다.
  // console.log( (i === 9 ? !boo : boo) ? '참참참' : '짝짝짝');
} 

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

collection = document.body.childNodes;
for ( var el_collection = [], i = collection.length - 1; collection[i]; i-- ) {
  let node = collection[i];
  // #text, <script> O
  if (node.nodeType === 3 || node.localName === 'script') {
    continue;
  }
  el_collection.push(node);
}

// var units = 'px em rem % vw vh vmin vmax'.split(' ');
// var unit;
// var i = 0;
// var l = units.length;

var demo = query('.demo');
var get_value = getStyle(demo, 'margin-top');


// ECMAScript 2015 <for ~ of>
// for (let unit of units) {
//   // statement
// }