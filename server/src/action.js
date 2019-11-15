const ACTION_JOIN = "join";
const ACTION_LEAVE = "leave";
const ACTION_ROLL = "roll";

class Action {
   constructor(type, data) {
      this.type = type;
      this.data = data;
   }
}

export default Action;
export {
   ACTION_JOIN,
   ACTION_LEAVE,
   ACTION_ROLL
};
