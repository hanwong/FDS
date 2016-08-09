/*
  * ----------------------------------------
  * DOM API를 사용하여 문서 객체를 동적으로 생성해보자.
  * ---------------------------------------- */

var maked_division = document.createElement('div');
var maked_division_text = document.createTextNode('this is div');

var maked_unordered_list = document.createElement('ul');
var maked_unordered_list_item = document.createElement('li');
var maked_unordered_list_item_text = document.createTextNode('this is li');

console.log('div: ', maked_division);
console.log('div-text: ', maked_division_text);
console.log('ul: ', maked_unordered_list);
console.log('li: ', maked_unordered_list_item);
console.log('li-text: ', maked_unordered_list_item_text);

/*
  * ----------------------------------------
  * DOM API를 사용하여 문서 객체를 동적으로 조작해보자.
  * ---------------------------------------- */

maked_division.appendChild(maked_division_text);
console.log(maked_division);

// 동적으로 생성한 <div> 요소를 문서의 특정한 목적지에 추가(삽입)
var target_place = document.querySelector('#parent > .child:last-child');
target_place.appendChild(maked_division);

maked_unordered_list_item.appendChild(maked_unordered_list_item_text);
maked_unordered_list.appendChild(maked_unordered_list_item);
// maked_unordered_list.appendChild(maked_unordered_list_item);
// target_place.appendChild(maked_unordered_list);

// 목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여 보겠다.
var target_container = document.createElement('div');
target_container.setAttribute('id', 'target-container');
target_container.appendChild(maked_unordered_list);
// document.body.appendChild(target_container);

var _target = document.body;
// _target.parentNode.insertBefore(target_container, _target);

prependChild(target_container, _target);




function prependChild( target_node, parent_node ) {
  parent_node.insertBefore(target_node, parent_node.firstChild);
}

function set_element (el, content) {
   var cont = document.createElement(el);
   console.log('cont: ', cont);
   var text_content = document.createTextNode(content);
   console.log('text: ', text_content);
   cont.appendChild(text_content); 
   return cont;
}
