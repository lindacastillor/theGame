(function(){
  'use strict';

  var board = {
    templateUrl : 'app/board/template.html',
    bindings:{
      size : '='
    },
    controller : boardCtrl
  };

  angular
    .module('thegame')
    .component('board',board);

  function boardCtrl(){
    var board = this;
    var bootstrap = 12;
    var colors = [
      '#9EEE24','#EED747','#EE8A30','#556270',
      '#FD10A6','#0097A7','#60FD10','#10AAFD',
      '#6B10FD','#FD9510','#C44D58','#348AA2',
      '#34A236','#8094DE','#100CC4','#2B8ED0',
      '#BB14CE','#3399FF','#3B250D','#FF6666',
      '#D32F2F','#FFCDD2','#FF4081','#03A9F4',
      '#D60000','#8BC34A','#4465E3','#F8CD24',
      '#FF0097','#FFA000','#461E6D','#536DFE',
      '#17D87E','#00ABA9','#0DBF07','#00BCD4'
    ];

    var number_squares = Math.pow(board.size,2);

    board.getColor = getColor;
    board.number_squares = new Array(number_squares);
    board.square_size= bootstrap/board.size;

    function getColor(i){
      return colors[i];
    }
  }
})();