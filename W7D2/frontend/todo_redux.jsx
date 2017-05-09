import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// const addLoggingToDispatchDumb = store => {
//   const disp = store.dispatch;
//   return action => {
//     console.log(`Old state: ${store.getState()}`);
//     console.log(`Action: ${action}`);
//
//     disp(action);
//
//     console.log(`New state: ${store.getState()}`);
//   };
// };

const addLoggingToDispatch = store => next => action => {
  console.log(`Old state: ${store.getState()}`);
  console.log(`Action: ${action}`);

  let result = next(action);

  console.log(`New state: ${store.getState()}`);

  return result;
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
