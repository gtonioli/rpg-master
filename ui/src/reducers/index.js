import {combineReducers} from 'redux';
import {session} from './session';
import {room} from './room';
import {websocket} from './websocket';

const reducers = combineReducers({
   session,
   room,
   websocket
});

export default reducers;
