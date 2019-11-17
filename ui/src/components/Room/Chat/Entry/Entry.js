import React, {Component} from 'react';
import Simple from './Simple/Simple';
import Roll from './Roll/Roll';

import './Entry.scss';

class Entry extends Component {
   getEntry(action) {
      const {data} = action;

      if (action.type === "join") {
         return (
            <Simple>
               <b>{data.name}</b> joined the group!
            </Simple>
         );
      } else if (action.type === "leave") {
         return (
            <Simple>
               <b>{data.name}</b> left the group!
            </Simple>
         );
      } else if (action.type === "roll") {
         return <Roll input={data.input} result={data.result}/>
      }
   }

   getUser(data) {
      return data.user ? data.user : "Server";
   }

   render() {
      const {action} = this.props;

      return (
         <div className="entry">
            <div className="header">
               <span className="name">{this.getUser(action.data)}</span>
               <span className="time">{new Date(action.data.timestamp).toLocaleTimeString()}</span>
            </div>
            <div className="body">
               {this.getEntry(action)}
            </div>
         </div>
      );
   }
}

export default Entry;
