(function() {
  'use strict';

  Controller.$inject = [];

  function Controller() {
    angular.extend(this, {
      data: 'A single data',
      clicked: () => {
        console.log('One click on Angular Controller');
      },
      $onInit: () => {
        console.log('on init in controller');
      }
    });
  }

  angular
    .module('ngang.controllers', [])
    .controller('Controller', Controller);

})();