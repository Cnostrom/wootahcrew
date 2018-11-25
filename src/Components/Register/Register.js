import React, { Component } from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Register.css';
import axios from 'axios'



export default class Register extends Component {
state = {
  firstname:'',
  lastname:'',
  email:'',
  username: '',
  password:'',
  state:'',
  bio:'',
  url:''
  
}

handleChange = (e) => {
  const key = e.target.name;
  const value = e.target.value;
  this.setState({ [key]: value }) 
}
  
  handleClickRegister = () => {
    const user = { 
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      state: this.state.state,
      bio: this.state.bio,
      url: this.state.url
    }
    axios.post('http://localhost:8080/api/register',user)
    .then(() => {
      this.props.history.push('../Login/Login')
    alert('welcome to wootah crew')
    })
    .catch(err => console.log(err))
  }
  

  render() {
    return (
      <div>
         <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
           Register your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input placeholder='First name' name='firstname' onChange = {this.handleChange}  value={this.state.firstname}/>
            <Form.Input placeholder='Last name' name='lastname' value={this.state.lastname} onChange={this.handleChange}/>
            <Form.Input fluid icon='mail' name='email' iconPosition='left' placeholder='E-mail address' value={this.state.email}
            onChange={this.handleChange}/>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User name' name='username' value={this.state.username} 
            onChange={this.handleChange} />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' value={this.state.password} 
            onChange={this.handleChange}/>
            <Form.Input fluid icon='location arrow' iconPosition='left' name='state' placeholder='state' value={this.state.state} 
            onChange={this.handleChange} />
             <Form.Input fluid icon='user' iconPosition='left' name='bio' placeholder='short bio' value={this.state.bio} 
            onChange={this.handleChange} />
            <Form.Input fluid icon='image' iconPosition='left' name='url' placeholder='image url' value={this.state.url} 
            onChange={this.handleChange} />
            <Header as='h2' color='#eb5e28' textAlign='center'>
            <br/>
            <div className='interest'>
            Select some interest for your news feed
            </div>
            </Header>
            <Button id='button1' color='#eb5e28' fluid size='large' > Dogs</Button>
            <br/>
            <Button id='button2' color='#eb5e28' fluid size='large'> Cats</Button>
            <br/>
            <Button id='button3' color='#eb5e28' fluid size='large'> Jokes</Button>
            <br/>
            <br/>
            <Button id='buttonRegister' onClick = {this.handleClickRegister} color='teal' fluid size='large'> Register
            </Button>
            </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>


      </div>
    )
  }
}

