import React, { Component } from 'react'
import './Navbar.css';
import axios from 'axios';


export default class Navbar extends Component {
  handleClickHome = () => {
    this.props.history.push('../Dashboard/Dashboard')
  }
  handleClickLogout = () => {
    axios.get('/api/logout')
    .then(() => {
      this.props.history.push('../Login/Login')
    alert('You are logged out')
    })
    .catch(err => console.log(err))
  }


  render() {
    return (

      <div className='navbar'>
        I want to go <a href='http://localhost:3000/dashboard'>home</a>
        <p className='title'>Wootah Crew</p>
        <button className= 'logout' onClick={this.handleClickLogout}>Logout</button>
        
      </div>
      
    )
  }
}
