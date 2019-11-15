export const roll = (input) => {
   return (dispatch, getState, {emit}) => {
      emit("roll", {
         input,
         private: false
      });
   };
};
