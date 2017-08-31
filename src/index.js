import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes'
import {loadUsers} from './actions/userActions'
import MainPage from './components/MainPage'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

// store.dispatch(loadUsers())

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,

  // <MainPage />,
  document.getElementById('root'));
registerServiceWorker();
