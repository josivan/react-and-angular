(function() {
  'use strict';

  console.log('angular', angular);

  angular
    .module('ngang', [
      'react',
      'ngang.controllers',
      'ngang.components'
    ]);

})();
