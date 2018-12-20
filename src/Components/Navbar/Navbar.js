import React, { Component } from 'react'
import './Navbar.css';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  handleClickLogout = () => {
    this.props.logout()
    this.props.push('./login')
  }
 
  render() {
    return (
      <div className='navbar'>
        <button className='logout' onClick={ this.handleClickLogout}>Logout</button>
        <h1 className='title'> Wootah Crew </h1>
        <div className='logo' />
      </div>
    )
  }
}
  
export default withRouter(Navbar)