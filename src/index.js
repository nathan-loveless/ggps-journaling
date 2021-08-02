import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './state/reducers/reducers';
import thunk from 'redux-thunk';
import { saveToLocalStorage, loadFromLocalStorage } from './utils/saveSession';
import { configureAmplify } from './amplify.js';

require('dotenv').config();

configureAmplify();

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
