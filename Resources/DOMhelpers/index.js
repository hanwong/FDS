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