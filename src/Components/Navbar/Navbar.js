import React, { Component } from 'react'
import './Navbar.css';


export default class Navbar extends Component {
  handleClickHome = () => {
    this.props.history.push('../Dashboard/Dashboard')
  }
  handleClickLogout = () => {
    this.props.history.push('../Login/Login')
  }


  render() {
    return (

      <div className='navbar'>
        <button className= 'home' onClick={this.handleClickHome}>Home</button>
        <p className='title'>Wootah Crew</p>
        <button className= 'logout' onClick={this.handleClickLogout}>Logout</button>
        
      </div>
      
    )
  }
}
