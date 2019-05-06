import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from './redux/reducers';

import './index.scss';
import App from './App';

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyCTi0eQ29OASXBCdGUFrluEDVSIURVmv0w",
  authDomain: "ewwproject-7aafb.firebaseapp.com",
  databaseURL: "https://ewwproject-7aafb.firebaseio.com",
  projectId: "ewwproject-7aafb",
  storageBucket: "ewwproject-7aafb.appspot.com",
  messagingSenderId: "797234592144",
  appId: "1:797234592144:web:611a541bbb1f49cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

