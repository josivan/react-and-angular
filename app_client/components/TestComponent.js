import React from 'react';

var TestComponent = React.createClass({
  josivan: function() {
    console.info('aMethod was called');
  },
  propTypes: {
    consoleLog: React.PropTypes.object.isRequired,
    message: React.PropTypes.string.isRequired
  },
  _dataChanged: function(ev) {
    console.log('_dataChanged -> ev', ev.target);
    console.log('_dataChanged -> value', ev.target.value);
  },
  render: function() {
    console.info('render was called');
    //return React.DOM.h1(null, 'A single react component.');
    return (
      <div>
        <h1>Now using JSX</h1>
        <div><input type="text" onChange={this._dataChanged}></input></div>
        <div><input type="text" onChange={this._dataChanged}></input></div>
        <button onClick={this.props.consoleLog.clickOnController}>{this.props.message}</button>
      </div>
    );
  }
});

export default TestComponent;
