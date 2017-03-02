import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

(function() {
  'use strict';

  const MyLoginComponent = {
    template: ($element, $attrs) => {
      const rComp = React.createElement(TestComponent, 
      {
        consoleLog: {
          clickOnController: () => {
            console.info('a method in controller');
          }
        },
        message: 'Button Text'
      });
      ReactDOM.render(rComp, $element[0]);
    },
    controller: 'Controller'
  };

  angular
    .module('ngang.components', [])
    .component('loginComponent', MyLoginComponent);

})();
