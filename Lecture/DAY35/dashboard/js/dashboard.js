(function(global){
  'use strict';
  
  function Wbar(selector) {
    this.wbar = document.querySelector(selector);
    this.init();
  }
  Wbar.prototype = {
    'constructor': Wbar,
    'max-value': 400,
    'bar-length': 360,
    'init': function () {
        var wbar = this.wbar;
        wbar.origin_class = wbar.getAttribute('class');
        var sales = wbar.querySelectorAll('.woong-bar');
        // console.log(sales);
        var total_bar = createNode('div');
        total_bar.setAttribute('class', 'bar');
        var value_bar = createNode('div');
        value_bar.setAttribute('class', 'value');
        total_bar.appendChild(value_bar);
        // console.log(bar_length);

        var len = sales.length;
        for( var i = 0; i < len ; i++ ){
          var sales_value = sales[i].querySelector('.sales-value').childNodes[0].nodeValue;
          var total_clone = total_bar.cloneNode(true);
          var bar_length = Wbar.prototype['bar-length'] * sales_value / Wbar.prototype['max-value'];
          console.log(bar_length);

          total_clone.querySelector('.value').style['width'] = bar_length + 'px';
          if ( hasClass(sales[i], 'blue') ) {
            total_clone.querySelector('.value').style['background-image'] = 'linear-gradient(to top, #1991eb 0%, #2ea1f8 100%)';
          } else if ( hasClass(sales[i], 'purple') ) {
            total_clone.querySelector('.value').style['background-image'] = 'linear-gradient(to top, #7f5be6 0%, #7f5be6 1%, #9d8fe3 100%)';
          } else if ( hasClass(sales[i], 'green') ) {
            total_clone.querySelector('.value').style['background-image'] = 'linear-gradient(to top, #24b00d 0%, #59da44 100%)';
          } else if ( hasClass(sales[i], 'yellow') ) {
            total_clone.querySelector('.value').style['background-image'] = 'linear-gradient(to top, #fdba00 0%, #f8cf5d 100%)';
          }
          sales[i].appendChild(total_clone);
        }

    },
    'startAnimation': function () {
       /* body... */ 
    }
  };

  global.Wbar = Wbar;
//END IIFE PATTERN
})(this);