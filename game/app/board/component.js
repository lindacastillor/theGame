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

    var ArrayRandom =[];

    function getColor(){
      var i = parseInt( Math.random() *(colors.length+1), 10); 
      // return colors[i]; //regresa un color random del arreglo indice
      ArrayRandom.push(colors[i]); //ese color se agrega al color random que arroja el colors[i]
      console.log(ArrayRandom);

      return colors[i]
      // return ArrayRandom; //regresa el arreglo para tenerlo disponible

    }

//    var ArrayRandom =[]; //esto es un arreglo vacio
    // var num_random = Math.random(); //variable que guarda el numero aleatoriamente 
    // ArrayRandom.push(num_random);//agrega a ese arreglo el numero que esta generando

   // function pushNumber(){ //que guarda los numeros

      //for (var i = 0; i < 1; i++) { //ciclo, i indica que tiene que empezar desde el indice 0 hasta un rango de 10 y vaya sumando 1 (i++) +=numero 
        //var i = parseInt( Math.random() *(colors.length+1), 10); // genera un número random de los valores del array de los colores length es entero multiplica un numero random por el total de elementos que tiene en el arreglo base 10
        //ArrayRandom.push(i); //agrega el numero que genera el parseInt
      }
//      console.log(ArrayRandom) //imprime los numeros guardados en [] array vacio



    }
    

    // ArrayRandom.append() //a esea variable que es un arreglo le va a agregar algo = append 




  }
})();






