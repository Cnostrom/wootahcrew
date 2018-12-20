import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../Redux/Actions';
import axios from 'axios';
import './Post.css';
// import { addComment } from '../Redux/Actions';
// import CommentForm from '../Form/CommentForm'

class Post extends Component {
  state = {
    comment: ''
  }

  componentDidMount = () => {
    this.props.getData()
  }

  deletebtn = (userid, id) => {
    if (userid === this.props.user.id) {
      return (
        <button className='deletebtn' onClick={() => this.delete(id)}>delete</button>
      )
    }
  }

  delete = (id) => {
    axios.delete(`/api/deletePost/${id}`)
      .then(() => this.props.getData())
      .catch(err => console.log(err))
  }

  displayPost = () => {
    const posts = this.props.posts.reverse().map(i => {
      return (
        <div className='postsDisplayBox'>
          <h2>{i.title}</h2>
          <img className="image" src={i.url} alt=''></img>
          <p className='post-content' >{i.content}</p>
          <p>posted by : {i.author}</p>
          {this.deletebtn(i.userid, i.id)}
        </div>
      )
    })
    return (
      <div>
        {posts}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='post'>
          {this.displayPost()}
          {/* <CommentForm user={this.props.user} addComment={this.props.addComment}/> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, { getData })(Post);

