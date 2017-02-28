import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from '../../src/LoginComponent.jsx';

(function() {
  'use strict';

  LoginComponent.$inject = [];

  function LoginComponent() {
    return {
      restrict: 'E',
      scope: {
      },
      link: (scope, el, attrs) => {
        var MyComponent = React.createFactory(LoginComponent);
        ReactDOM.render(MyComponent, el[0]);
      }
    };
  }

  angular
    .module('ngang.directives', [])
    .directive('LoginComponent', LoginComponent);

})();

