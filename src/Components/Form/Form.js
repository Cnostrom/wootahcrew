import React, { Component } from 'react';
import './Form.css';
// import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


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
      <div>
      
      </div>
      
    );
  }
}

