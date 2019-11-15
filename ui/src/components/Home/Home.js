import React, {Component} from 'react';
import {connect} from 'react-redux';
import {joinSession} from '../../actions';

import './Home.scss';

class Home extends Component {
   constructor(props) {
      super(props);

      const {name, roomId} = this.props.session;
      if (name && roomId && name.length > 0 && roomId.length > 0) {
         this.props.history.push(`/room/${roomId}`);
      }

      this.state = {
         name: "",
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
      return name.length > 0 && roomId.length > 0;
   }

   joinSession() {
      const {name, roomId} = this.state;
      this.props.joinSession(name, roomId);
      this.props.history.push(`/room/${roomId}`);
   }

   render() {
      const logo = require("../../../assets/images/site/dice.png");

      return (
         <div className="home container-fluid">
            <div className="form-group content container-fluid rounded">
               <img src={logo} className="img-fluid mx-auto d-block logo" alt="RPG Master"/>
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nome"
                         onChange={(e) => this.handleNameChange(e)}/>
               </div>
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Room id" value={this.state.roomId}
                         onChange={(e) => this.handleRoomIdChange(e)}/>
               </div>
               <button type="button" className="btn btn-pink btn-join" disabled={!this.canBeSubmitted()}
                       onClick={() => this.joinSession()}>
                  Entrar
               </button>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const session = state.session;
   return {session};
};

const mapDispatchToProps = dispatch => {
   return {
      joinSession: (name, roomId) => dispatch(joinSession(name, roomId))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
