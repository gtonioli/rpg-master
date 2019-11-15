import {combineReducers} from 'redux';
import {session} from "./session";
import {room} from "./room";

const reducers = combineReducers({
   session,
   room
});

export default reducers;
