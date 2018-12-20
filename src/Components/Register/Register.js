import React, { Component } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';
import './Register.css';
import axios from 'axios'

export default class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    state: '',
    yearjoined: '',
    url: ''
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
      yearjoined: this.state.yearjoined,
      url: this.state.url
    }
    axios.post('/api/register', user)
      .then(() => {
        this.props.history.push('../Login/Login')
        alert('Welcome to Wootah Crew')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='register-body'>
        <div className='register-background-picture' />
        <div className='register'>
          <div className='formBackground'>
            {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.register-form {
        height: 100%; 
      }
      `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column className='complete-form' style={{ maxWidth: 450 }}>
                <p className='login-p'>Register your account</p>
                <Form className='register-form'>
                  <Segment stacked>
                    <Form.Input placeholder='First name' name='firstname' onChange={this.handleChange} value={this.state.firstname} />
                    <Form.Input placeholder='Last name' name='lastname' value={this.state.lastname} onChange={this.handleChange} />
                    <Form.Input fluid icon='mail' name='email' iconPosition='left' placeholder='E-mail address' value={this.state.email}
                      onChange={this.handleChange} />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='User name' name='username' value={this.state.username}
                      onChange={this.handleChange} />
                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' value={this.state.password}
                      onChange={this.handleChange} />
                    <Form.Input fluid icon='location arrow' iconPosition='left' name='state' placeholder='Where are you from?' value={this.state.state}
                      onChange={this.handleChange} />
                    <Form.Input fluid icon='calendar alternate outline' iconPosition='left' name='yearjoined' placeholder='What year is it?' value={this.state.yearjoined}
                      onChange={this.handleChange} />
                    <Form.Input fluid icon='image' iconPosition='left' name='url' placeholder='  Your avatar image url' value={this.state.url}
                      onChange={this.handleChange} />
                    <br />
                    <button className='registerbtn' onClick={this.handleClickRegister}> Register</button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

