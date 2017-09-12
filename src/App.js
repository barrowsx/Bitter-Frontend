import React, { Component } from 'react';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes'
import './App.css';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
