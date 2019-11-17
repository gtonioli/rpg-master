import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import DiceButton from './DiceButton/DiceButton';
import {dices} from '../../../constants/dices';

import './CommandBar.scss';

class CommandBar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         defaultDices: dices
      };
   }

   render() {
      return (
         <div className="command-bar">
            <div className="default-dices">
               {
                  this.state.defaultDices.map((dice) => {
                     return <DiceButton dice={dice} key={uuidv4()}/>;
                  })
               }
            </div>
         </div>
      );
   }
}

export default CommandBar;
