import React, { Component } from 'react';
import './Form.css';
import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


export default class PostForm extends Component {
  state = {
    title:'',
    url:'',
    content:''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
    
  }

  render() {
    return (
      
      <div className="form">
      <h1>New post</h1>
      <div className='post-form'>
      <div class='ui card'>
  <img src={this.state.url} alt='' class='ui image' />
  <div class='content'>
    <div class='header'>Elliot Baker</div>
    <div class='meta'>Friend</div>
    <div class='description'>
      Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his
      cat.
    </div>
  </div>
  <div class='extra content'>
    <a>
      <i aria-hidden='true' class='user icon' />
      16 Friends
    </a>
  </div>
</div>
     
       </div>
      </div>
    );
  }
}

