import React from 'react';
import ReactDOM from 'react-dom';

class LoginComponent extends React.Component {

  cliquei() {
    console.log('clicado');
  }

  render() {
    return <div>
      <div><input type='text' name='email' /></div>
      <div><input type='password' name='password' /></div>
      <div><button onClick={this.cliquei}>Do Login</button></div>
    </div>;
  }
}

// ReactDOM.render(<LoginComponent />, document.getElementById('app2'));
export default LoginComponent;
