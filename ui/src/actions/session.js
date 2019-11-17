import {JOIN_SESSION, RESET_SESSION, SET_ROOM_ID} from '../constants/actionTypes';

export const joinSession = (name, roomId) => {
   return (dispatch, getState, {emit}) => {
      const data = {name, roomId};

      dispatch({
         type: JOIN_SESSION,
         data
      });

      emit("join", data);
   }
};

export const leaveSession = () => {
   return (dispatch, emit) => {
      emit("leave");

      dispatch({
         type: RESET_SESSION
      });
   }
};

export const setRoomId = roomId => ({type: SET_ROOM_ID, data: roomId});
