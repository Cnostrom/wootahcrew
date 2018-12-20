import React, { Component } from 'react'
import { connect } from 'react-redux';
import './User.css';

class User extends Component {
  render() {
    return (
      <div className='usercard'>
        <div className='uicard'>
          <img className='userimg' src={this.props.user.url} alt='' />
          <div className='content'>
            <div className='header'>{this.props.user.username}</div>
            <div className='meta'>
              <span className='date'>Joined in {this.props.user.yearjoined}</span>
            </div>
            <div className='description'>{this.props.user.username} is from {this.props.user.state}.</div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateProps)(User);