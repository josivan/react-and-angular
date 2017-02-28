import React from 'react';

var TestComponent = React.createClass({
  aMethod: function() {
    console.info('aMethod was called');
  },
  propTypes: {
    controller: React.PropTypes.object.isRequired
  },
  render: function() {
    console.info('render was called');
    //return React.DOM.h1(null, 'A single react component.');
    return (
      <div>
        <h1>Now using JSX</h1>
        <button onClick={this.controller.clickOnController()}>A button</button>
      </div>
    );
  }
});

export default TestComponent;
