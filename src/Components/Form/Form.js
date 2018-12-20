import React, { Component } from 'react'
import Popup from "reactjs-popup";
import './Form.css';

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class Form extends Component {
  state = {
    title: '',
    url: '',
    content: ''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  handleClickSubmit = (close) => {

    const post = {
      id: this.props.user.id,
      author: this.props.user.username,
      title: this.state.title,
      content: this.state.content,
      url: this.state.url
    }
    if (this.state.title !== '' || this.state.content !== '') {
      this.props.addPost(post)
      close()
    }

  }

  render() {
    return (
      <div className='popup-box'>
      <p className='news-title'>Top news stories</p>
        <Popup
          trigger={<button className="createPost"> Create a Post! </button>} modal contentStyle={contentStyle}>
          {close => (
            <div className="createForm">
              <a className="close" href={'../Dashboard/Dashboard'} onClick={close}>&times;</a>
              <div className="header"> Create a post</div>
              <div className="ui input">
                <input type='text' placeholder='title "required"' name='title' value={this.state.title} onChange={this.handleChange} />
              </div>
                <br />
              <div className='ui input'>
                <input type='text' placeholder='Image' name='url' value={this.state.url} onChange={this.handleChange} />
              </div>
                <br />
              <div className='content'>
                <textarea className='contentInput' type='text' placeholder=' content "required" ' name='content' value={this.state.content} onChange={this.handleChange} />
              </div>
                <br />
              <button className="submit" onClick={() => this.handleClickSubmit(close)}>Submit</button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default Form
