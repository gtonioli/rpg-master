import React, {Component} from 'react';

class Roll extends Component {
   render() {
      console.log(this.props.data);
      return (
         <div className="roll">
            <b>{this.props.input}</b>: {this.props.result.result}
         </div>
      );
   }
}

export default Roll;
