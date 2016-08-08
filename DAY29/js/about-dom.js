var parent = document.getElementById('parent');
var parent_child_nodes = parent.childNodes;
// 

console.log(parent_child_nodes);
console.log('수집된 parent의 자식 노드의 개수: ', parent_child_nodes.length);

var child_length = parent_child_nodes.length;

for ( i = 0; i < child_length; i++) {
  if ( parent_child_nodes[i].nodeType === 1){
    console.log('%c currnet node is ELEMENT_NODE.', 'background: #222; color: #bada55');
    child_group = parent_child_nodes[i];
    break;
  } else {
    console.log('currnet node is TEXT_NODE.');
  }
}

var child_group;
// 컨텐트 블럭, 플로우를 만들 수 있는 
for (  i = 0; i < child_group.childNodes.length; i++ ) {
  console.log(child_group.children[i]);
}

console.log('parent - role: ', parent.getAttribute('role'));
console.log('parent - data-container: ', parent.getAttribute('data-container'));
console.log('parent - aria-hidden: ', parent.getAttribute('aria-hidden'));

var div_el = parent.getElementsByTagName('div');
var div_length = div_el.length;
for ( i = 0; i < div_length; i++ ) {
  
  if ( !div_el[i].hasChildNodes() ) {
    console.log( div_el[i] );
  }
}