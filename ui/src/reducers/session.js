import {JOIN_SESSION, RESET_SESSION, SET_ROOM_ID} from '../constants/actionTypes';

const initialState = {
   name: null,
   roomId: null
};

export const session = (state = initialState, action) => {
   switch (action.type) {
      case JOIN_SESSION:
         return {
            ...state,
            ...action.data
         };
      case RESET_SESSION:
         return {
            ...state,
            roomId: null
         };
      case SET_ROOM_ID:
         return {
            ...state,
            roomId: action.data
         };
      default:
         return state;
   }
};
