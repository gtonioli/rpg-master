import React, {Component} from 'react';
import {roll} from '../../../../actions';

import './DiceButton.scss';
import {connect} from "react-redux";

class DiceButton extends Component {
   roll(dice) {
      this.props.roll(dice.input);
   }

   render() {
      const {dice} = this.props;

      return (
         <div key={dice.id}>
            <button className="btn btn-pink btn-dice" onClick={() => this.roll(dice)}>
               {dice.label.toUpperCase()}
            </button>
         </div>
      );
   }
}

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = dispatch => {
   return {
      roll: (input) => dispatch(roll(input))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiceButton);
