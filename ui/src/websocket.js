import io from 'socket.io-client';
import {messageTypes} from './constants/websocket';
import {WS_UPDATE_CONNECTION_STATE} from './constants/actionTypes';

const socket = io(process.env.socket, {
   path: "/rpg-master/socket"
});

export const init = (store) => {
   messageTypes.forEach(type => {
      socket.on(type, (data) => {
         store.dispatch({
            type: "WS_" + type.toUpperCase(),
            data
         });
      });
   });

   socket.on("connect", () => {
      store.dispatch({
         type: WS_UPDATE_CONNECTION_STATE,
         data: {
            isConnected: true
         }
      });
   });

   socket.on("disconnect", () => {
      store.dispatch({
         type: WS_UPDATE_CONNECTION_STATE,
         data: {
            isConnected: false
         }
      });
   });
};

export const emit = (type, payload) => socket.emit(type, payload);
