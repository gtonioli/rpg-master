import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chat from './Chat/Chat';
import CommandBar from './CommandBar/CommandBar';
import UsersList from './UsersList/UsersList';
import {setRoomId} from '../../actions';

import './Room.scss';

class Room extends Component {
   constructor(props) {
      super(props);

      const {name, roomId} = this.props.session;
      if (!name || !roomId) {
         const roomIdParam = this.props.match.params.roomId;
         if (roomIdParam) {
            this.props.setRoomId(roomIdParam);
            this.props.history.push(`/`);
         }
      }
   }

   componentDidUpdate() {
      if (!this.props.isConnected) {
         this.props.history.push("/");
      }
   }

   render() {
      return (
         <div className="room">
            <div className="content">
               <Chat/>
               <CommandBar/>
            </div>
            <UsersList/>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const session = state.session;
   const {isConnected} = state.websocket;
   return {session, isConnected};
};

const mapDispatchToProps = dispatch => {
   return {
      setRoomId: roomId => dispatch(setRoomId(roomId))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
