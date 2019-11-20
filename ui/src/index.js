import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/global.scss';

let appWithRouter;

if (process.env.dev) {
   appWithRouter = <HashRouter><App/></HashRouter>;
} else {
   appWithRouter = <BrowserRouter><App/></BrowserRouter>
}

ReactDOM.render(
   <Provider store={store}>{appWithRouter}</Provider>,
   document.getElementById('page')
);
