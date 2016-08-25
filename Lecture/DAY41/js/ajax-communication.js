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

  // xhr.open('GET', 'data/data.xml');

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
      // -------------------------------------------------------------------------------------------
      // XML
      // result_view.innerHTML = '['+ this.statusText + '] ' + this.response; 

      // var doc = this.responseXML;
      // var people = doc.querySelector('people');
      // var person_list = people.querySelectorAll('person');
      // var template = '<ul>';
      // var person, name, tel, mail, i = person_list.length -1;
      // for ( ; person_list[i]; i-- ){
      //   person = person_list[i];
      //   name = person.querySelector('name').firstChild.nodeValue;
      //   tel = person.querySelector('tel').firstChild.nodeValue;
      //   mail = person.querySelector('mail').firstChild.nodeValue;
      //   // console.log(name, tel, mail);
      //   template += [
      //   '<li>' ,
      //     '<span class="name">' + name + '</span>',
      //     '<span class="tel">' + tel + '</span>',
      //     '<span class="mail">' + mail + '</span>',
      //   '</li>' 
      //   ].join('');
      // }
      // template += '</ul>';
      // result_view.innerHTML = template;

      // -------------------------------------------------------------------------------------------
      // JSON
      var random_users = this.response;
      // [ text -> object ]
      // JSON 객체의 parse() 메소드를 사용
      // JSON.parse( json 문자열)
      // [ text <- object ]
      // JSON 객체의 stringify() 메소드를 사용
      // JSON.stringify( js 객체 )
      
      var convert_users = JSON.parse(random_users);
      // console.log(convert_users.results);
      var template = [
      '<table>'+
        '<tr>'+
          '<th>index</th>'+
          '<th>name</th>'+
          '<th>nation</th>'+
          '<th>picture</th>'+
        '</tr>'
      ];
      var people = convert_users.results;
      // people  반복 순환 처리
      var index = 1;
      for ( var person of people ) {
        person.fullname = `${person.name.first} ${person.name.last}`;
        template += [
            '<tr>',
              '<td>'+index+'</td>',
              '<td>'+person.fullname+'</td>',
              '<td>'+person.nat+'</td>',
              '<td><img src="'+person.picture.thumbnail+'"></td>',
            '</tr>'
        ].join('');
        index++;
      }
      template += '</table>';
      console.log(template);
      result_view.innerHTML = template;

    } else {
      console.log('통신 데이터 전송 실패 :( ');
      result_view.textContent = '['+ this.statusText + '] ' + '데이터 로드에 실패하였습니다.'
    } 
  }
  
  function homeView () {
    // 2. OPEN
    xhr.open('GET', 'data/data.xml');
    // 3. SEND
    xhr.send();
  }
  function aboutView () {
    // 2. OPEN
    xhr.open('GET', 'data/data.json');
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


(function(global, $){
  'use strict';
  
  // 유틸리티 메소드
  // $.ajax
  // $.get
  // $.post
  // $.getJson
  // $.getScript

  // var json = $.getJSON('data/data.json');
  // json.then(function (data, status, XHR) {
  //   console.log(data.results);
  // });

  // $.getJSON('data/data.json')
  //   .then(function (data, status, XHR) {
  //   console.log(data.results);
  // });

  $.ajax({
    'url': 'data/data.json',
    'dataType': 'json',
    'success': function (data, status, XHR) {
    console.log(data.results);
    }
  });

//END IIFE PATTERN
})(this, this.jQuery);