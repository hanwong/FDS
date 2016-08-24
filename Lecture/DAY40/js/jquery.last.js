(function(global, $){
  'use strict';
  
  var $gnb = $('.gnb');
  var $gnb_list = $gnb.find('li');

  var $gnb_list_1st = $gnb_list.eq(0);
  var $gnb_list_2nd = $gnb_list.eq(1);
  var $gnb_list_last = $gnb_list.eq(-1);

  // selector
  // $gnb_list.not('[class]').addClass('have-not-class');

  // function
  $gnb_list.not(function (index, el) {
     // console.log(el);
     // if (index % 2 === 0) {
     //  console.log(index);
     // }
     return index % 2 === 0;
  }).addClass('even');
  // $gnb_list.not(':odd').addClass('odd');

  // $gnb_list.filter(':odd').remove();

  // $gnb_list
  //   .add('nav, a')
  //   .addClass('nav-comp')
  //   .filter(function(index, element) {
  //     var node_name = element.nodeName.toLowerCase();
  //     return node_name === 'a' || node_name === 'nav';
  // })
  //   .css({
  //     'display': 'inline-block',
  //     'padding': '1em',
  //     'color': '#000'
  //   });

  $gnb_list.each(function (idx, el) {
      // $(el)  === $(this)
      // DOM
      el.innerHTML += '<span>'  + '++'+ (idx) + '</span>';
      // jQuery
      // $(el).html( $(el).html + $('<span>').text(idx) );
  });

  var $gnb_first = $gnb.find(':first');
  console.log( $gnb_first.next().children(':last').prevAll('.first').parents()  );

//END IIFE PATTERN
});
// (this, this.jQuery);

(function(global, $){
  'use strict';
  
  var $gnb = $('.gnb');

  // $gnb.find('li:first-child a').clone().add('<p>링크 뒤에 나오는 단락</p>').prependTo('li:first-child', $gnb);
  $gnb.find('li:first-child a').add('<p>링크 뒤에 나오는 단락</p>');

  $('<div>')
  .addClass('custom-division')
  .attr({'id': 'hi-seoul','title': 'hey jude'})
  .text('Hey Division Element1')
  .on('click', function(){ $div.appendTo('ol'); })
  .appendTo('ol');

  var $div = $('<div>', {
    'id': 'hi-seoul',
    'class': 'custom-division',
    'title': 'hey jude',
    'text': 'Hey Division Element2',
    'on': { 'click': function(){ console.log(this); } }
  });
   // $div.appendTo('ol');



//END IIFE PATTERN
})(this, this.jQuery);