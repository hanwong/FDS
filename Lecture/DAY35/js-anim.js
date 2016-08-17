
/*
  * ----------------------------------------
  * ToDoList
  * ---------------------------------------- 
  * 1. 문서에서 demo-box요소를 선택한다.
  * 2. demo-box요소를 사용자가 클릭하면
  * 3. 움직이는 함수 (moving box)를 호출한다.
  * 4. 애니메이션이 종료되면 콜백 함수를 실행한다.
  */

var demo_box = query('.demo-box');

function movingBox (box, position, callback) {
  isEl(box);
   // 초기값 설정
   position = position || {x: 0, y:0};
   callback = callback || function () {};

   // 애니메이션 시동
   var current = { x: box.offsetLeft, y: box.offsetTop };



   // 애니메이션 종료
   callback();
}

demo_box.onclick = function(event) {
  movingBox( this, {
    x: event.clientX,
    y: event.clientY
  }, function () {
     console.log('모든 애니메이션이 종료되었습니다.');
  });
}
