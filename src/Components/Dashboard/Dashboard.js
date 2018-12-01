import React, { Component } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import User from '../User/User';
import Form from '../Form/Form';



class Dashboard extends Component {
  state={
    name:'Curtis'
  }

  render() {
    return (
      
      <div className="dashboard">
       <Navbar/>
      <h1>Welcome back {this.state.name}</h1>
      <div className='user-info'>
     <User/>
     <Form/>
    
       </div>
      </div>
    );
  }
}

export default Dashboard;