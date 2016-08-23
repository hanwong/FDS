(function(global, $){
  'use strict';
  
  var $body = $('body');

  $body
    .css('margin-left', '2rem')
    .css('margin-right', '2rem');

  var css_map = {
    'background': '#2a070a',
    'color': '#cd636f',
    'font-size': '+=22'
  };

  $body.css(css_map);
  var body_font_size = $body.css('font-size');
  console.log(body_font_size);

  // var fn_map = {
  //   'width': function(index, value){
  //     return global.parseFloat(value, 10)/3 +20;
  //   },
  //   'height': function (index, value) {
  //      if (global.parseFloat(value, 10) < 300) {
  //       return '100vh';
  //      } else {
  //       return value * 2;
  //      }
  //   }

  // }
  // $body.css(fn_map);

//END IIFE PATTERN
});
//(this, this.jQuery);

(function(global, $){
  'use strict';
  
  var $h1 = $('h1');
  var h1_words = $h1.text().split('');

  h1_words  = $.map(h1_words, function (item, idx) {
     if ( $.trim(item) ){
      return '<span>' + item + '</span>';
     } else {
      return item;
     }
  });
  h1_words = h1_words.join('');
  // console.log(h1_words);
  $h1.html(h1_words); //setter
  console.log($h1.html()); //getter

  var $letters = $('span', $h1);
  // console.log(span);

  // 불필요한 처리를 하지 않는 코드를 작성~
  // 코드 리뷰 -> 리팩토링을 해보자. 
  // 작은 것이 모여서 큰 효율을 이룬다~
  // $letters.on('mouseenter',  function(){
  //   $(this).css('background', '#ff0');
  // });
  // $letters.each(function (index, item) {
  //    // var $this = $(item);
  //    var $this = $letters.eq(index);
  //    $this.on('mouseenter', function () {
  //       $this.css('color', '#52c88c');
  //    });
  // });

  $letters.each(function (index, item) {
     // var $this = $(item);
     var $this = $letters.eq(index);
     $this.one('mouseenter', $.proxy(letterOvers, $this)); // proxy =  bind를 추상화해서 만든 함수호출
     $this.one('mouseenter', $.proxy(palyEffectSound, $this)); // proxy =  bind를 추상화해서 만든 함수호출
  });

  function letterOvers () {
    this.css({
      'transform': 'scale(1.5)',
      'margin-right': '10px'
    });
  }

  // HTML5 Audio 객체 생성
  // var effect_sound = $('<audio>');
  // effect_sound.attr({
  //   'src': '../../Resources/media/tong.mp3'
  // });
  // effect_sound = effect_sound[0];
  var effect_sound = $('<audio>', {
    'src': '../../Resources/media/tong.mp3'
  })[0];

  function audioStop (audio) {
     audio.pause();
     audio.currentTime = 0;
  }
  function palyEffectSound () {
     audioStop(effect_sound);
     effect_sound.play();
  }





    // evt.data.$this.css('background', '#ff0');
//END IIFE PATTERN
})(this, this.jQuery);