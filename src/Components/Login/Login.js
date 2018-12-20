import React, { Component } from 'react';
import './Login.css';
import { Form, Grid, Message, Segment, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login } from '../Redux/Actions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  handleClickLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
  }

  render() {
    return (
      <div className='login-body'>
        <div className='login-background-picture' />
        <div className='login-form'>
          <div className='login-header'>
            <h1 className='title-login'> Welcome to Wootah Crew</h1>
            <p className='login-p'>This app was created for a group of friends to be able to create posts to</p>
            <p className='login-p'>remember good times or to create interest in an upcoming event.</p>
            <p className='login-p'>mostly it was made so we could make fun of each other!</p>
            <p className='login-p'> sign-up  or</p>
            <p className='login-p'> Log-in to your account</p>
          </div>
          
          <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, display: 'flex', alignItems:'center'}}>
              <Form className='loginForm'>
                <Segment stacked>
                  <Form.Input fluid icon='user' name='username' iconPosition='left' placeholder='User name' onChange={this.handleChange} />
                  <Form.Input onChange={this.handleChange} fluid icon='lock' name='password' iconPosition='left' placeholder='Password' type='password' />
                  <button className='logbtn' onClick={this.handleClickLogin}> Login </button>
                </Segment>
              </Form>
              <Message color='bright orange' >
                New to us? <a href='http://localhost:3000/register' >Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login)





















