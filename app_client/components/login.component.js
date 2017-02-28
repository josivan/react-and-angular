import React from 'react';
import ReactDOM from 'react-dom';
//import LoginComponent from '../../src/LoginComponent.jsx';

(function() {
  'use strict';

  const MyLoginComponent = {
    template: () => {
      return "<h1>Angular Component with {{$ctrl.data}}</h1>";
    },
    controller: 'Controller'
  };

  angular
    .module('ngang.components', [])
    .component('loginComponent', MyLoginComponent);

})();
