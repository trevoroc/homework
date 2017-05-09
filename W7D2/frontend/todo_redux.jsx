import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const addLoggingToDispatch = store => next => action => {
  console.log(`Old state: ${store.getState()}`);
  console.log(`Action: ${action}`);

  let result = next(action);

  console.log(`New state: ${store.getState()}`);

  return result;
};

const applyMiddleware = (store, middlewares) => {
  let dispatch = store.dispatch;

  middlewares.forEach((midware) => {
    dispatch = midware(store)(dispatch);
  });

  return Object.assign({}, store, { dispatch });
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  store = applyMiddleware(store, [addLoggingToDispatch]);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
