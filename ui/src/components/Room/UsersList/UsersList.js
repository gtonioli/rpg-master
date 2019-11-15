import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

import './UsersList.scss';

class UsersList extends Component {
   render() {
      const users = _.sortBy(this.props.users, "name");

      return (
         <div className="users-list">
            <div className="header">
               Players: {users.length}
            </div>
            {
               users.map(user => {
                  return (
                     <div key={uuidv4()} className="entry">
                        {user.name}
                     </div>
                  );
               })
            }
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const users = state.room.users;
   return {users};
};

export default connect(mapStateToProps)(UsersList);
