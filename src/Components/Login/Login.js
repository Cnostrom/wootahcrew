import React, { Component } from 'react';
import './Login.css';
import {Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import axios from 'axios'

class Login extends Component {
  state = {
    username:'',
    password:''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })  
    console.log(this.state)
  }
  handleClickLogin = () => {
    console.log(this.state)
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post ('/api/login', user)
    .then(() => this.props.history.push('../Dashboard/Dashboard'))
    .catch((err) => console.log(err))
  }
  
  render() {
    return (
      <div className='login-form'>

      <div className='login-header'>
      <Header as='h2' color='teal' textAlign='center'> Welcome to Wootah Crew
          </Header>
      <p>This app was created for a group of friends to be able to create posts to</p>
      <p>remember good times or to create interest in an upcoming event.</p>
      <h3>mostly it was made so we could make fun of each other!</h3>

      </div>
      
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' name='username' iconPosition='left' placeholder='User name' onChange ={this.handleChange} />
              <Form.Input onChange ={this.handleChange} fluid icon='lock' name='password' iconPosition='left' placeholder='Password' type='password' />
              <Button color='teal' fluid size='large' onClick= {this.handleClickLogin}> Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='http://localhost:3000/register'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      
    </div>
  );
}
}
  
  export default Login


















  
  
      
