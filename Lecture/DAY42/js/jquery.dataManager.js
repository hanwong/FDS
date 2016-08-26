(function(global, $){
  'use strict';

  $ === window.hanwong

//END IIFE PATTERN
})(this, (this.hanwong = this.hanwong || {}));

(function(global, $){
  'use strict';
  
  $.localDB = {
    'support': (function(){
      var json = !!global.JSON, localstorage = !!global.localStorage
      return function (feature) {
         if (!feature) {
          return {
            'json': json,
            'localstorage': localstorage
          };
         } 
         feature = feature.toLowerCase();

         if (feature === 'json') { return json;}
         if (feature === 'localstorage') { return localstorage;}
      }
    })(),

    'getData': function (key) {
      //  로컬스토리지로부터 데이터를 반환(문자 >> 객체)
      if (!key || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage')) {
        throw new Error('getData');
      }
      return global.JSON.parse( global.localStorage.getItem(key) );
    },
    'setData': function (key, data) {
      // 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장
      if ( !key || !data || $.type(key) !== 'string' || !this.support().json || !this.support('localstorage') ) {
        throw new Error('setData');
      }
      global.localStorage.setItem(key, global.JSON.stringify(data));
    },
    'removeData': function (key) {
      // key에 해당하는 데이터를 로컬스토리지로부터 제거

       global.localStorage.removeItem(key);
    },
    'clearAll': function () {
      // 로컬스토리지 데이터가 존재할 경우 모든 데이터를 제거
       global.localStorage.clear();
    },
  };


//END IIFE PATTERN
})(this, this.jQuery);