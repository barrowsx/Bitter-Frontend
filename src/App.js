import React, { Component } from 'react';
// import SignIn from './components/SignIn'
// import MainPage from './components/MainPage'
// import Routes from './components/Routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
