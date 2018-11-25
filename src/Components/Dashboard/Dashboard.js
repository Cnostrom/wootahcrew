import React, { Component } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import User from '../User/User';




class Dashboard extends Component {
  state = {
    
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
    
  }

  render() {
    return (
      
      <div className="dashboard">
       <Navbar/>
      <h1>Dashboard</h1>
      <div className='user-info'>
     <User/>
    
       </div>
      </div>
    );
  }
}

export default Dashboard;