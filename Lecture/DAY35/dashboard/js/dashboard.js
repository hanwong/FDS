(function(global){
  'use strict';
  
  function Wbar(selector, maxvalue, barlength, barheight) {
    this.wbar = document.querySelector(selector);
    this.maxvalue = maxvalue ? maxvalue : 400;
    this.barlength = barlength ? barlength : 360;
    this.barheight = barheight ? barheight : 18;

    this.init();
  }
  
  Wbar.prototype = {
    'constructor': Wbar,

    'init': function () {
        var wbar = this.wbar;
        wbar.origin_class = wbar.getAttribute('class');
        var sales = wbar.querySelectorAll('.wbar');
        var total_bar = createNode('div');
        total_bar.setAttribute('class', 'bar');
        var value_bar = createNode('div');
        value_bar.setAttribute('class', 'value');
        total_bar.appendChild(value_bar);

        var len = sales.length;
        for( var i = 0; i < len ; i++ ){
          var sales_value = sales[i].querySelector('.wbar-value').childNodes[0].nodeValue;
          var total_clone = total_bar.cloneNode(true);
          var bar_length = this.barlength * sales_value / this.maxvalue;
          var bar_height = this.barheight;

          total_clone.style['width'] = this.barlength + 'px';
          total_clone.querySelector('.value').style['width'] = bar_length + 'px';

          total_clone.style['height'] = this.barheight + 'px';
          total_clone.querySelector('.value').style['height'] = bar_height + 'px';

          if ( hasClass(sales[i], 'blue') ) {
            // console.log(total_clone.firstChild);
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #1991eb 0%, #2ea1f8 100%)';
          } else if ( hasClass(sales[i], 'purple') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #7f5be6 0%, #9d8fe3 100%)';
          } else if ( hasClass(sales[i], 'green') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #24b00d 0%, #59da44 100%)';
          } else if ( hasClass(sales[i], 'yellow') ) {
            total_clone.firstChild.style['background-image'] = 'linear-gradient(to top, #fdba00 0%, #f8cf5d 100%)';
          }
          sales[i].appendChild(total_clone);
        }

        for( var i = 0; i < len ; i++ ){
          var value_bar = sales[i].querySelector('.value');
          console.dir(value_bar);
          startAnimation(value_bar);
        }

      function startAnimation (bar) {
         var level = 1;
         var value_length = parseInt(bar.style.width,10);
         var step_bar = value_length / 100;
         var anim_width = 0;
         var step = function () {
            anim_width = anim_width + step_bar;
            bar.style.width = anim_width +'px';
            if (level < 100) {
              level++;
              setTimeout(step, 10);
            }
         };
         setTimeout(step, 10);
      }

    },

  };

  global.Wbar = Wbar;
//END IIFE PATTERN
})(this);