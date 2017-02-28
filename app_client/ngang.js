import LoginComponent from '../src/LoginComponent.jsx';

(function() {
  'use strict';

  console.log('angular', angular);

  angular
    .module('ngang', [
      'react',
      'ngang.directives',
      'ngang.controllers',
    ])
    .value('LoginComponent', LoginComponent);

})();
