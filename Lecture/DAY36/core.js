// 전역


// 코드를 작성하기 위한 공간 생성 : IIFE 패턴
(function(global){
  'use strict';

  var date = new Date().getDay();
  console.log('today is', date);

  function checkWeek (day) {
    switch (day) {
      case 0:
      case 6:
        console.log('앗싸~~주말이다!!!');
        break;
      default:
        console.log('앗싸~~출근이다!!!');
        break;
    }
  }
  
  global.hanwong = { 'checkWeek': checkWeek };
//END IIFE PATTERN
})(this);


(function(global){
  'use strict';
  
  var buttons = makeArray(document.querySelectorAll('.button'));
  console.log(isType(buttons));
  var i = 0;
  var l = buttons.length;
  
  // for ( ; i<l; i++ ) {
  //   buttons[i].onclick = (function (index) {
  //     return function () {
  //       console.log('this is '+ index +' button.');
  //     };
  //   }(i));
  // }

  buttons.forEach(function (button, index, buttons) {
     button.onclick = function () {
      console.log('this is '+ index +' button.');
     }
  });

//END IIFE PATTERN
})(this);


(function(global){
  'use strict';
  
  global.num1 = (new Number(1)).valueOf();
  global.num2 = (new Number(2)).valueOf();
  global.num3 = (new Number(3)).valueOf();
  global.num4 = (new Number(4)).valueOf();
  global.num5 = (new Number(5)).valueOf();
  global.num6 = (new Number(6)).valueOf();
  global.num7 = (new Number(7)).valueOf();
  global.num8 = (new Number(8)).valueOf();
  global.num9 = (new Number(9)).valueOf();
  global.num10 = (new Number(10)).valueOf();

  global.boo1 = (new Boolean(0)).valueOf();
  global.boo2 = (new Boolean(1)).valueOf();
  global.boo3 = (new Boolean(0)).valueOf();
  global.boo4 = (new Boolean(1)).valueOf();
  global.boo5 = (new Boolean(0)).valueOf();
  global.boo6 = (new Boolean(1)).valueOf();
  global.boo7 = (new Boolean(0)).valueOf();
  global.boo8 = (new Boolean(1)).valueOf();
  global.boo9 = (new Boolean(0)).valueOf();
  global.boo10 = (new Boolean(1)).valueOf();

//END IIFE PATTERN
})(this);