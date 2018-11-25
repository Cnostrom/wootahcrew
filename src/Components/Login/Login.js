import React, { Component } from 'react';
import './Login.css';
import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
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
    axios.post ('http://localhost:8080/api/login', user)
    .then(() => this.props.history.push('../Dashboard/Dashboard'))
    .catch((err) => console.log(err))
  }

  handleClickRegister = () => {
    this.props.history.push('../Register')
  }
  
  render() {
    return (
      <div className='login-form'>

      <div className='login-header'>
      <Header as='h2' color='teal' textAlign='center'> Welcome to Wootah Crew
          </Header>
      <p>This is where I will tell you about this app to see if it is something you are interested in</p>


      </div>
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
            New to us? <a href='#' onClick = {this.handleClickRegister} >Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
      
    </div>
  );
}
}
  
  export default Login


















  
  
      
//     );
//   }
// }

// export default Login;


{/* <div className="login">
      <h1>Welcome to Wootah crew</h1>
      <p>This is where I will tell you about this app to see if it is something you are interested in</p>
      <div className='login-title'>
      <h4>log-in to your account</h4>
      <div className='login-form'>
      <input name ='email' value ={this.state.email} onChange ={this.handleChange} /> 
      <br/>
      <input name ='password' value ={this.state.password} onChange ={this.handleChange} /> 
      <br/>
      <button>login</button>
        </div>
        <div className='signup'>
      <button onClick= {this.handleClick} className ='newsignUp'>New to us? Sign Up</button>

        </div>
       </div>
      </div> */}