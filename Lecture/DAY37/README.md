###### Front-End Develop SCHOOL

# DAY 37

### jQuery 

* CDN을 불러오지 못하는 경우
```js
this.jQuery || document.write('<script src="../../Resources/Library/jquery/jquery-3.1.0.min.js"><\/script>');
```


* iife 패턴을 이용하면 `$`가 반드시 jQuery를 가리킨다.
```js
(function(global, $){
  'use strict';
  
  ${1://start}

//END IIFE PATTERN
})(this, this.jQuery);
```