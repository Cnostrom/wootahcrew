import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import User from '../User/User';
import Form from '../Form/Form';
import Post from '../Post/Post';
import { addPost } from '../Redux/Actions';
import { getNews } from '../Redux/Actions';
import { logout } from '../Redux/Actions';
import './Dashboard.css';
import Newsfeed from '../News/Newsfeed';

 
class Dashboard extends Component {

  render() {

    return ( 

      <div className="dashboard">
        <Navbar push= {this.props.history.push} logout= {this.props.logout}/>
        <h1>Welcome back, {this.props.user.firstname}</h1>
        <div className='user-info'>
          <User/>  
          <Form user={this.props.user} addPost={this.props.addPost}/>
          <div className='news-box'>
          <Newsfeed news={this.props.news} />
          </div>
          <Post posts={this.props.postList} />
        </div>
      </div>
    );
  }
}


const mapStateProps = state => {
  return {
    user: state.user.user,
    postList: state.user.postList,
    news: state.user.news
  }
}

export default connect(mapStateProps, {addPost, getNews, logout})(Dashboard);

