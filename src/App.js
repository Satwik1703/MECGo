import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Parent from './components/Parent/Parent';
import Warden from './components/Warden/Warden';
import Security from './components/Security/Security';
import History from './components/History/History';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/parent'>
            <Parent />
          </Route>
          <Route exact path='/warden'>
            <Warden />
          </Route>
          <Route exact path='/security'>
            <Security />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
