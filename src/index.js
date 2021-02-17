import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';

import App from './App';

import {createStore, bindActionCreators} from "redux";
import {Provider} from 'react-redux';
import rootReducer, * as actions from "./store/counter";
const store = new createStore(rootReducer);
// store.subscribe(() => console.log(store.getState()));
// const {plusAction} = bindActionCreators(actions, store.dispatch);
// plusAction(5);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
    document.getElementById('root')
);
