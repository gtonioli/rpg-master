import React, {Component} from 'react';
import {connect} from 'react-redux';
import {joinSession} from '../../actions';

import './Home.scss';

class Home extends Component {
   constructor(props) {
      super(props);

      const {name, roomId} = this.props.session;
      if (this.props.isConnected && name && roomId && name.length > 0 && roomId.length > 0) {
         this.props.history.push(`/room/${roomId}`);
      }

      this.state = {
         name: name ? name : "",
         roomId: roomId ? roomId : ""
      };
   }

   handleNameChange(event) {
      this.setState({
         name: event.target.value
      });
   }

   handleRoomIdChange(event) {
      this.setState({
         roomId: event.target.value
      });
   }

   canBeSubmitted() {
      const {name, roomId} = this.state;
      return name.length > 0 && roomId.length > 0 && this.props.isConnected;
   }

   joinSession() {
      const {name, roomId} = this.state;
      this.props.joinSession(name, roomId);
      this.props.history.push(`/room/${roomId}`);
   }

   render() {
      const logo = require("../../../static/images/site/dice.png");

      return (
         <div className="home container-fluid">
            <form className="form-group content container-fluid rounded">
               <img src={logo} className="img-fluid mx-auto d-block logo" alt="RPG Master"/>
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" value={this.state.name}
                         onChange={(e) => this.handleNameChange(e)}/>
               </div>
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Room id" value={this.state.roomId}
                         onChange={(e) => this.handleRoomIdChange(e)}/>
               </div>
               <button type="submit" className="btn btn-pink btn-join" disabled={!this.canBeSubmitted()}
                       onClick={() => this.joinSession()}>
                  Join
               </button>
            </form>
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
      joinSession: (name, roomId) => dispatch(joinSession(name, roomId))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
