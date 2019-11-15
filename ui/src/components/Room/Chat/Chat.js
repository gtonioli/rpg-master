import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

import './Chat.scss';

class Chat extends Component {
   getChatEntry(action) {
      if (action.type === "join") {

      } else if (action.type === "leave") {

      } else if (action.type === "roll") {

      }
   }

   render() {
      const actions = _.sortBy(this.props.actions, "data.timestamp");

      return (
         <div className="chat">
            {
               actions.map((action) => {
                  return (
                     <div key={uuidv4()}>
                        {this.getChatEntry(action)}
                     </div>
                  );
               })
            }
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const actions = state.room.actions;
   return {actions};
};

export default connect(mapStateToProps)(Chat);
