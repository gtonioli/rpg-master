import React, {Component} from 'react';
import {connect} from 'react-redux';
import Entry from "./Entry/Entry";
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

import './Chat.scss';

class Chat extends Component {
   componentDidUpdate() {
      const {scrollTop, scrollHeight, offsetHeight} = document.getElementsByClassName("chat")[0];

      if (scrollHeight - (scrollTop + offsetHeight) < 200) {
         document.getElementsByClassName("chat")[0].scrollTop = document.getElementsByClassName("chat")[0].scrollHeight;
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
                        <Entry action={action}/>
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
