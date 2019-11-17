import {WS_UPDATE_CONNECTION_STATE} from '../constants/actionTypes';

const initialState = {
   isConnected: false
};

export const websocket = (state = initialState, action) => {
   switch (action.type) {
      case WS_UPDATE_CONNECTION_STATE:
         return {
            ...state,
            isConnected: action.data.isConnected
         };
      default:
         return state;
   }
};
