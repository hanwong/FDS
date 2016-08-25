(function(global, XHR){
  'use strict';
  
  var createXHR = (function () {
    XHR = XHR || ActiveXObject('Microsoft.XMLHttp'); 
     return function () {
        return new XHR; 
     } 
  })();
  // 1. CREATE
  // XMlHttpRequest() 생성자 함수를 통해 비동기 통신을 수행할 객체를 생성
  var xhr = createXHR();

  var result_view = document.querySelector('.ajax-result');
  var call_ajax_btn1 = document.querySelector('.call-ajax-data1');
  var call_ajax_btn2 = document.querySelector('.call-ajax-data2');
  var call_ajax_btn3 = document.querySelector('.call-ajax-data3');

  call_ajax_btn1.onclick = homeView;
  call_ajax_btn2.onclick = aboutView;
  call_ajax_btn3.onclick = viewView;
  
  // 비동기 통신 객체에 이밴트 핸들로 바인딩
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log('통신 데이터 전송 성공 :) ');
      // result_view.textContent = '['+ this.statusText + '] ' + this.response; 
      result_view.innerHTML = '['+ this.statusText + '] ' + this.response; 
    } else {
      console.log('통신 데이터 전송 실패 :( ');
      result_view.textContent = '['+ this.statusText + '] ' + '데이터 로드에 실패하였습니다.'
    } 
  }
  
  function homeView () {
    // 2. OPEN
    xhr.open('GET', 'data/home.html');
    // 3. SEND
    xhr.send();
  }
  function aboutView () {
    // 2. OPEN
    xhr.open('GET', 'data/about.html');
    // 3. SEND
    xhr.send();
  }
  function viewView () {
    // 2. OPEN
    xhr.open('GET', 'data/view.html');
    // 3. SEND
    xhr.send();
  }

//END IIFE PATTERN
})(this, this.XMLHttpRequest);