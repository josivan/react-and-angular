import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

(function() {
  'use strict';

  const MyLoginComponent = {
      /*
    template: () => {
      return "<h1>Angular Component with {{$ctrl.data}}</h1>";
      const lcp2 = React.createFactory(LoginComponent2);
      console.log('lcp2', lcp2);
      return lcp2.render();
    },
      */
    template: ($element, $attrs) => {
      console.log('no template');
      console.log('$element', $element);
      console.log('$attrs', $attrs);
      const lcp2 = React.createElement(TestComponent);
      console.log('lcp2', lcp2);
      ReactDOM.render(lcp2, $element[0]);
    },
    controller: 'Controller'
  };

  angular
    .module('ngang.components', [])
    .component('loginComponent', MyLoginComponent);

})();
