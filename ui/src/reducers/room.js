import {WS_USERSLIST} from "../constants/actionTypes";

const initialSetup = {
   users: [],
   lastUpdateUsers: Date.now()
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
      default:
         return state;
   }
};
