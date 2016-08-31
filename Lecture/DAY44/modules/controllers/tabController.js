(function(global, ng, jq){
  'use strict';
  
  function getRandom (els) {
     if ( !els.length || els.length === 0 ) { return 0; }
     return Math.floor( Math.random() * els.length );
  }

  ng.module('ngApp')
  .controller('tabController', ['$scope', function($scope){
    var $tabmenu = $('.tab-menu');
    var $tabmenu_btns = $tabmenu.find('button');
    // 초기 활성화된 탭
    $scope.selected_tab = getRandom($tabmenu_btns);
    $scope.setRandom = function () {
       this.selected_tab = getRandom($tabmenu_btns);
    }
  
  $scope.selected_tab_idx = 0;
  
  $scope.isSelectedTab = function (idx) {
     return this.selected_tab_idx === idx;
  }

  $scope.selectTab = function (idx) {
     this.selected_tab_idx = idx; 
  }

  }]);

//END IIFE PATTERN
})(this, this.angular, this.jQuery);