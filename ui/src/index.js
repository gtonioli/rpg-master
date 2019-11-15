import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/global.scss';

ReactDOM.render(
   <Provider store={store}><HashRouter><App/></HashRouter></Provider>,
   document.getElementById('page'),
);
