var demo_item = hanwong.queryAll('.demo-navigation ul a');
var i=0, l=demo_item.length;

// 클로저 함수를 반환하는 래퍼함수를 만드는것은 큰 비용이들고 비효율적이다.
// function showMeIndexWrapper (index) {
//    function showMeIndex() {
//     console.log('my index number is ', index);
//    }
//    return showMeIndex;
// }

// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
// IIFE 패턴 (즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.
// +function(){}();
// ~function(){}();
// !function(){}();
// (function(){})();
(function(){
  // 외부와 단절된 독림된 공간이 형성
  // 캡슐화
}());

for ( ; i<l; i++) {
  demo_item[i].onclick = (function(index){
  return function () {
    console.log('my index number is ', index);
  };
}(i));
}
