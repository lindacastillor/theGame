(function(){
  'use strict';

  angular
    .module('thegame')
    .config(configuration);


  configuration.$inject = ['$routeProvider'];
  function configuration($routeProvider){
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/training', {
        template: 'TRAINING <board size="4"></board>'
      })
      .when('/baby', {
        template: 'BABY <board size="3"></board>'
      })
      .when('/junior', {
        template: 'JUNIOR <board size="4"></board>'
      })
      .when('/master', {
        template: 'MASTER <board size="6"></board>'}
      )
      .otherwise('/');
  }
})();