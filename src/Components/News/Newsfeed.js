import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getNews } from '../Redux/Actions';
import './Newsfeed.css'


class Newsfeed extends Component {

  componentDidMount = () => {
    this.props.getNews()
  }

  displayNews = () => {
    const news = this.props.news.map(i => {
      return (
        <div className='newsDisplayBox'>
          <h2>{i.title}</h2>
          <a href={i.url} target='_blank' rel='noopener noreferrer'>
            <img className="NewsImage" src={i.urlToImage} alt=''></img>
          </a>
          <p className='content' >{i.content}</p>
          <p className='date'> {i.publishedAt}</p>
          <p>posted by : {i.author}</p>
        </div>
      )
    })
    return (
      <div>
        {news}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='news'>
          {this.displayNews()}
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

export default connect(mapStateToProps, { getNews })(Newsfeed);