import React, {Component} from 'react';

class Simple extends Component {
   render() {
      return (
         <div>
            {this.props.children}
         </div>
      );
   }
}

export default Simple;
