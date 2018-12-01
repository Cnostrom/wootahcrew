import React, { Component } from 'react'
import './User.css';


export default class User extends Component {
state = {
url:'https://robohash.org/BRR.png',
username:'Cnostrom',
state:'utah',
joinedYear:'2018'
}
  
  render() {
    return (
    <div>
    <div className='ui card'>
  <img src={this.state.url} alt =''/>
  <div className='content'>
    <div className='header'>{this.state.username}</div>
    <div className='meta'>
      <span className='date'>Joined in {this.state.joinedYear}</span>
    </div>
    <div className='description'>{this.state.username} is from {this.state.state}.</div>
  </div>
  
</div>
    
    </div>
  
  
    )
  }
}
