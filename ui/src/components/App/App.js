import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Room from '../Room/Room';

import './App.scss';

class App extends Component {
   render() {
      return (
         <div className="app">
            <div className="content">
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/room/:roomId" component={Room}/>
               </Switch>
            </div>
         </div>
      );
   }
}

export default App;
