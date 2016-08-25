(function(global, XHR){
  'use strict';
  
  var xhr = new XHR;

  xhr.onreadystatechange = function () {
     if ( this.status === 200 && this.readyState === 4 ) {
      view.innerHTML = this.responseText;
     }
  };

  var view = document.querySelector('main');
  var nav_links = document.querySelectorAll('nav a');

  for ( var link, i = nav_links.length - 1; nav_links[i]; i-- ) {
    link = nav_links[i];
    // 1. 클로져 + 우회 메소드( $.proxy, bind ) 사용
    link.onclick = (function (index) {
       return viewUpdate.bind(link, index);
    })(i);

    // 2. 객체에 속성 설정
    // link.index = i;
    // link.onclick = viewUpdate;
  }

  var views = 'home about works contact'.split(' ');

  function viewUpdate (index) {
     var page = 'view/' + views[index] + '.html' ;
     xhr.open('GET', page);
     xhr.send();
     // 페이지의 주소(해쉬) 값을 변경
    global.location.hash = page;
    // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
    return false;
  }

  link.onclick();

//END IIFE PATTERN
})(this, this.XMLHttpRequest);