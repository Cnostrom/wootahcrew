import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';



class App extends Component {



  render() {
    
    return (
      
      <div className="App">
       
      <Router >
          <Switch>
            <Route path = '/Login' component = { Login }/>
            <Route path = '/Dashboard' component = { Dashboard }/>
            <Route path = '/PostForm' component = { Form }/>
            <Route path = '/Navbar' component = { Navbar }/>
            <Route path = '/Register' component = { Register }/>
           

          </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
