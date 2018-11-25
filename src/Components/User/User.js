import React, { Component } from 'react'
import './User.css';


export default class User extends Component {
state = {
url:'https://robohash.org/BRR.png',
username:'cnostrom',
state:'utah',
bio:'This is just info about me.'
}
  
  render() {
    return (
        <div class='uiCard'>
    <img src={this.state.url} alt='' class='ui image' />
    <div class='content'>
      <div class='header'> {this.state.username}</div>
      <div class='location'>{this.state.state}</div>
      <div class='description'>{this.state.bio}</div>
    </div>
    
    </div>
  
  
    )
  }
}
