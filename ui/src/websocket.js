import io from 'socket.io-client';
import {messageTypes} from "./constants/websocket";

const socket = io(process.env.socket.url, {
   path: process.env.socket.path
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
};

export const emit = (type, payload) => socket.emit(type, payload);
