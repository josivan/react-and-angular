import React from 'react';
import ReactDOM from 'react-dom';

var HelloReact = React.createClass({
  render: () => {
    return <h1>Hello React</h1>;
  }
});

ReactDOM.render(<HelloReact />, document.getElementById('app'));