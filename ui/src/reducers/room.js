import {WS_ACTION, WS_USERSLIST} from "../constants/actionTypes";

const initialSetup = {
   users: [],
   lastUpdateUsers: Date.now(),
   actions: []
};

export const room = (state = initialSetup, action) => {
   switch (action.type) {
      case WS_USERSLIST:
         if (action.data.timestamp > state.lastUpdateUsers) {
            return {
               ...state,
               users: action.data.users,
               lastUpdateUsers: action.data.timestamp
            };
         }

         return state;
      case WS_ACTION:
         return {
            ...state,
            actions: [...state.actions, action.data]
         };
      default:
         return state;
   }
};
