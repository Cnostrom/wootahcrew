import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getSession} from './Components/Redux/Actions';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

import Register from './Components/Register/Register';
import Group from './Components/Group/Group';
import User from './Components/User/User';
import history from './history';


class App extends Component {
componentDidMount = () => {
  this.props.getSession()
}



  render() {
    
    return (
      
      <div className="App">
       
      <ConnectedRouter history={history}>
          <Switch>
            <Route component = { Login }/>
            <Route path = '/Login' component = { Login }/>
            <Route path = '/PostForm' component = { Form }/>
            {
              this.props.userExist &&(
                <Switch>
                <Route path = '/Dashboard' component = { Dashboard }/>

                </Switch>
              )
            }

            <Route path = '/Register' component = { Register }/>
            <Route path = '/Group' component = { Group }/>
            <Route path = '/User' component = { User }/>
          </Switch>
       </ConnectedRouter>
      </div>
    );
  }
}
const mapStateProps= state => {
  return {
    userExist:!!state.user.user
  }
}
export default connect(mapStateProps,{getSession})(App);
