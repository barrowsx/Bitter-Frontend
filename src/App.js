import React, { Component } from 'react';
import SignIn from './components/SignIn'
import MainPage from './components/MainPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
