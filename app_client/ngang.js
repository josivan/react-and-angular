import LoginComponent from '../src/LoginComponent.jsx';

(function() {
  'use strict';

  console.log('angular', angular);

  angular
    .module('ngang', [
      'react',
      'ngang.controller'
    ])
    .value('LoginComponent', LoginComponent);
})();
