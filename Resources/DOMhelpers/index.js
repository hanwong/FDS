function prependChild( child_node, parent_node ) {
  parent_node.insertBefore( child_node, parent_node.firstChild );
}

function insertAfter( insert_node, target_node ) {
  // 삽입하고자 하는 노드를 목표 노드 뒤에 추가해주는 헬퍼 함수
  // 함수 내부의 var 키워드를 사용한 변수 선언은 [지역변수]가 된다.
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  if ( next_node ) {
    next_node.parentNode.insertBefore(insert_node, next_node);
  } else {
    parent_node.appendChild(insert_node);
  }
}

function set_element (el, content) {
   var el_node = document.createElement(el);
   if ( typeof content !== 'undefined' && typeof content === 'string'){
     var text_node = document.createTextNode(content);
     el_node.appendChild(text_node); 
   }
   return el_node;
}

function queryAll ( sel, con ) {
  if ( typeof sel !== 'string' ) { throw new Error('전달인자는 문자열을 입력하셔야 합니다.'); }
  // if ( typeof sel !== 'string' ) { console.error('전달인자는 문자열을 입력하셔야 합니다.'); }
  if ( !con ) { con = document; }
  return con.querySelectorAll( sel );
}

function query ( sel, con ) {
  return queryAll( sel, con )[0];
}

// function $q ( sel, con ) {
//   if ( typeof sel !== 'string' ) { throw new Error('전달인자는 문자열을 입력하셔야 합니다.'); }
//   // if ( typeof sel !== 'string' ) { console.error('전달인자는 문자열을 입력하셔야 합니다.'); }
//   var hook = queryAll( sel, con ).length;
//   if ( hook > 1 ) {
//     return queryAll( sel, con );
//   } else {
//     return query( sel, con );
//   }
// }

function removeNode(arg) {
   arg.parentNode.removeChild(arg);
}

/**
 * choangeNodes(node1, node2)
 * ---------------------------------------------
 * @작성자    this
 * @버전     this
 * @param  {this} this
 * @return {this}
 */
// 
function changeNodes ( moving_node, target_node  ) {
  var moving_clone = moving_node.cloneNode(true);
  prependChild( moving_clone, moving_node.parentNode );
  var target_clone = target_node.cloneNode(true);
  target_node.parentNode.replaceChild(moving_node , target_node);
  moving_clone.parentNode.replaceChild(target_clone , moving_clone);
  // insertBefore(target_node, moving_node);
  // return target_node.parentNode.replaceChild(moving_node, target_node);
}

function getStyle(el, property, pseudo) {
  var  value;
  // 유효성 검사
  if (el.nodeType !== 1) {
    console.log('el 인자는 노드를 입력하셔야 합니다.');
  }
  if (typeof property !== 'string') {
    console.error('property 인자는 문자열을 입력하셔야 합니다.');
  }
    if (typeof pseudo !== 'string' && pseudo) {
    console.error('pseudo 인자는 문자열을 입력하셔야 합니다.');
  }
  if (getComputedStyle) {
    value = getComputedStyle(el, pseudo)[property];
  } else {
    value = el.currentStyle[property];
  }

  return value;
}

function camelCase(css_prop) {
  return css_prop.replace(/-./g, function($1) {
    return $1.replace('-','').toUpperCase();
  });
}

// JavaScript의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수
function isType(data) {
  return Object.prototype.toString.call( data ).slice(8,-1).toLowerCase();
}

// 요소 확인 함수
function isEl(node) {
  if (node.nodeType !== 1) {
    errorMsg('전달된 인자는 요소노드이어야 합니다.');
  }
  return !!node;
}

// 요소 이름 확인 함수
function isElName(node, name) {
  isEl(node);
  isType(name) !== 'string' ? errorMsg('두번째 인자로 텍스트 데이터를 입력하셔야 합니다.') : true;
  return node.nodeName.toLowerCase() === name;
}

// 텍스트노드 유형인지 확인하는 함수
function isTextNode (node) {
  return node.nodeType === 3;
}
function isnTextNode (node) {
  return node.nodeType !== 3;
}


function validData( data, type ) {
  return strictEqual( isType(data), type);
}

function equal (data1, data2) {
  return data1 == data2;
}

function strictEqual (data1, data2) {
  return data1 === data2;
}

// 에러 메세지 호출 함수
function errorMsg (message) {
  if ( isType(message) != 'string') {
    // 함수 자신을 다시 호출 : 재귀함
    errorMsg(' 오류 메시지는 문자 데이터 유형이어야 합니다. ');
  }
  throw new Error(message);
}



// 이전 요소 찾는 함수
function prevEl(node) {
  // 검증: 유효성 검사
  isEl(node);
  // IE 9+
  if ( node.previousElementSibling ) {
    return node.previousElementSibling;
  } else {
    // IE 8 이하
    do {
      node = node.previousSibling;
    } while (node && node.nodeType !== 1);
    return node;
  }
}

// 다음 요소 찾는 함수
function nextEl(node) {
  isEl(node);
  // IE 9+
  if ( node.nextElementSibling ) {
    return node.nextElementSibling;
  } else {
    // IE 8 이하
    do{
      node = node.nextSibling;
    } while (node && node.nodeType !== 1);
    return node;
  }
}

// 첫번째 자식 요소 노드를 찾는 함수 
function _firstEl (node) {
  isEl(node)
  // IE9+
  if (node.firstElementChild) {
    return node.firstElementChild;
  } else {
    // IE8이하
      node = node.firstChild;
     return ( node && !isEl(node) ) ? nextEl(node) : node;
  }
}

function firstEl (node) {
  return node.children[0];
}

// 마지막 자식 요소 노드를 찾는 함수
function lastEl (node) {
  return node.children[ node.children.length - 1 ];
}

// 단위 가져오기 함수
function getUnit(value) {
  var i=0, l=getUnit.units.length, unit;
  for ( ; i<l; i++) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1) {
      return unit;
    }
    // reg = new RegExp('\\d+' + unit, 'i');
    // if (reg.test(value)) {
    //   break;
    // }
  }
  return null;
}
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');

// 단위 제거 함수
function removeUnit(value) {
  removeUnit.unit = getUnit(value);
  // return +value.replace(unit, '');
  return parseFloat(value, 10);
}
removeUnit.unit = null;

// 단위 유무 확인 함수
function hasUnit(value) {
  return !!getUnit(value);
}

function makeArray (data) {
   var check_data = isType(data), result_arr = [], len = data.length;

   if (check_data==='array') {
    return data;
   }
   else if ( len && check_data !== 'string' ) {
      while ( len-- ) {
        result_arr.push(data[len]);
      }
   }
   return result_arr.reverse();
}


/* Array를 계속 호출하기 때문에 비효율적인 함수 개선 해야 한다.
function convertArray (data) {
  if ( Array.from ){
    return Array.from(data);
  } else {
    return Array.prototype.slice.call(data);
  }
}
*/

// Array를 한번만 물어보자.
var convertArray = (function(){
  if ( Array.from ){
    return function (data) {
      return Array.from(data);
    }
  } else {
    return function (data) {
      return Array.prototype.slice.call(data);
    }
  }
}());

