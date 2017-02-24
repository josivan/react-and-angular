import React from 'react';
import ReactDOM from 'react-dom';

var Login = React.createClass({
  cliquei: function() {
    console.log('clicado');
  },
  render: function() {
    return (<div>
      <input type='text' />
      <button onClick={this.cliquei}>Ok</button> 
    </div>);
  }
});

ReactDOM.render(<Login />, document.getElementById('app2'));