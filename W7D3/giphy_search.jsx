import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TODO: Delete later
import { receiveSearchGiphys, fetchSearchGiphys } from './actions/giphy_actions';

const store = configureStore();

// TODO: Delete later
window.store = store;
window.fetchSearchGiphys = fetchSearchGiphys;
