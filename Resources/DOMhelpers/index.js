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
   var cont = document.createElement(el);
   var text_content = document.createTextNode(content);
   cont.appendChild(text_content); 
   return cont;
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

