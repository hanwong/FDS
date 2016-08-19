// (function(global){
  // 'use strict';
  // var wrapper = query('.wrapper');
  var boxs = queryAll('.box');
  var btn_left = query('.btn-left');
  var btn_right = query('.btn-right');
  // var movingBox = [];
  
  function moveLeft () {
      boxs[4].parentNode.insertBefore(boxs[4], boxs[0]);
      boxs = queryAll('.box');
  }

  function moveRight () {
      insertAfter(boxs[0], boxs[4]);
      boxs = queryAll('.box');
  }

  btn_left.onclick = moveLeft;
  btn_right.onclick = moveRight;



//END IIFE PATTERN
// })(this);