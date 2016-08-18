// (function(global){
  // 'use strict';
  var wrapper = query('.wrapper');
  var boxs = convertArray( queryAll('.box') );
  var movingBox = [];
  function moveBox (argument) {
     // body...  
     if (false) {

        movingBox = boxs.shift();
     }
     else if (false) {

        movingBox = boxs.pop();
     }

     boxs.concat(movingBox);
  }




//END IIFE PATTERN
// })(this);