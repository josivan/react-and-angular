import React from 'react';

var TestComponent = React.createClass({
  render: function()  {
    console.log('render was called');
    return React.DOM.h1(null, 'A single react component.');
  }
});

export default TestComponent;
