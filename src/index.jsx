import React from 'react';
import { Provider } from "react-redux";
import { render } from 'react-dom';
import { App } from "./app";
import { loadState } from './api/dataLab/saveStore';
import configureStore from '../src/redux/configureStore.js';

// Create redux store with history
let initialState = loadState();

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);