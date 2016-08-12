// 문서에서 선택한 요소노트 참조
var page_header = query('.textbox');
var btn_inc = query('.btn-increase-text');
var btn_dec = query('.btn-decrease-text');
var btn_org = query('.btn-origin-text');
var change_text = 2;
var limit_up = 40;
var limit_down = 10;
var origin = getStyle(page_header,'fontSize');

// 글자 크기 변경 함수
function changeTextSize () {
  var oper = this.firstChild.nodeValue;
  var _change_text = change_text;
  var current_size = parseInt(getStyle(page_header,'fontSize'));
  
  if ( oper === '-') {
    _change_text = _change_text * -1;
  }

  if ( current_size  + _change_text > limit_up  || current_size  + _change_text < limit_down) {
    if ( current_size  + _change_text > limit_up ){
      page_header.style.fontSize = limit_up + 'px';;
    } else if ( current_size  + _change_text < limit_down) {
      page_header.style.fontSize = limit_down + 'px';;
    } 
    return;
  }
  page_header.style.fontSize = current_size + _change_text  + 'px';
}

function setOrigin() {
  console.log(origin);
  page_header.style.fontSize = origin;
}
// 검증
// console.log('page-header', page_header);
// console.log('btn-increase-text', btn_inc);
// console.log('btn-decrease-text', btn_dec);

// 버튼에 이벤트 핸들링(핸들러 - 바인딩)
btn_inc.onclick = 
btn_dec.onclick = changeTextSize; 

btn_org.onclick = setOrigin;


var test = query('.test');
var test2 = query('.test2');
var textbox = query('.textbox');
function changeBorder () {
   textbox.className = 'textbox test';
}
function bokgui () {
   textbox.className = 'textbox';
}

test.onclick = changeBorder;


var fade = function (node) {
  var level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    // console.log(node.style.backgroundColor);
    if (level < 15) {
      level += 1;
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100);
};

test2.onclick = function(event) { fade(page_header); };

var add_handlers = function (nodes) {
  var i;
  var hex;
  console.log('initial i :', i);
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function (i) {

       return function (e) {

        hex = (i*2).toString(16);
        // alert(i);
        nodes[i].style.backgroundColor = '#' + 'F0' + hex;
        console.log('nth :', i);
        console.log('bg :', nodes[i].style.backgroundColor);
       };
    }(i);
  }
};

String.method('deentityify', function() {
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };
  return function() {
    return this.replace( /&([^&;]+);/g,
      function (a, b) {
        console.log('a: ', a);
        console.log('b: ', b);
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  };
} () );
