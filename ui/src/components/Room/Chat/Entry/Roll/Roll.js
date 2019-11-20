import React, {Component} from 'react';

class Roll extends Component {
   render() {
      return (
         <div className="roll">
            <b>{this.props.input}</b>: {this.props.result.result}
         </div>
      );
   }
}

export default Roll;
