import React, { Component } from 'react';
import {Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

export default class Group extends Component {
  state = {
    username:'Curtisnostrom',
    group:'partycrew',
    url:'https://robohash.org/BRR.png',
    groupPassword:''
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })  
    console.log(this.state)
  }
  handleCreateGroup = () => {
    const group = {
      group: this.state.group,
      password: this.state.groupPassword
    }
    axios.post ('/api/joinGroup', group)
    .then(() => this.props.history.push('../Dashboard/Dashboard'))
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <div className='login-form'>

      <div className='login-header'>
      <Header as='h2' color='teal' textAlign='center'> Hello {this.state.username}</Header>
      <Header as='h2' color='teal' textAlign='center'>Welcome to Wootah Crew</Header>


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
          <Header as='h2' color='teal' textAlign='center'> Join or creat your own group.
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='group' name='group' iconPosition='left' placeholder='Group' onChange ={this.handleChange} />
              <Form.Input onChange ={this.handleChange} fluid icon='lock' name='groupPassword' iconPosition='left' placeholder='groupPassword' type='password' />
              <Button color='teal' fluid size='large' onClick= {this.handleClickJoin}> Join group
              </Button>
            </Segment>
          </Form>
          <Message>
             {/* <a href='#' onClick = {this.handleCreateGroup} >Create a group!</a> */}
          </Message>
        </Grid.Column>
      </Grid>
      
     </div>
      
      
    )
  }
}


  