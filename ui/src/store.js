import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {emit, init as initSocket} from './websocket'

let composeEnhancers = compose;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.dev) {
   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(reducers, composeEnhancers(
   applyMiddleware(thunk.withExtraArgument({emit})),
));

initSocket(store);

export default store;
