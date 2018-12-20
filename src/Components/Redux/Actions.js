import axios from 'axios';
import { push } from 'connected-react-router';

export const login = (user) => {
  return dispatch => {
    axios.post('/api/login', user)
      .then(res => {
        console.log(res)
        dispatch({
          type: "USER",
          payload: res
        });
        if (!res) {
          console.log('login failed')

        } else {
          dispatch(push('/Dashboard'))
        }
      })
      .catch(() => alert('Wrong username or password'))
  }
}

export const getSession = () => {
  return dispatch => {
    axios.get('/api/session')
      .then(res => {
        dispatch({
          type: "USER",
          payload: res
        });
        if (res) {
          dispatch(push('/dashboard'))
        }
        else { }
      })
  }
}

export const logout = () => {
  return dispatch => {
    axios.post('/api/logout')
      .then(() => {
        dispatch({
          type: "LOGOUT",
          payload: null
        })
      })
  }
}

export const getUser = () => {
  return dispatch => {
    axios.get('/api/get')
      .then(res => {
        dispatch({
          type: "GET_USER",
          payload: res.data
        })
      })
  }
}

export const addPost = (post) => {
  return dispatch => {
    axios.post('/api/post', post)
      .then(() => {
        dispatch({
          type: 'ADD',
          payload: post
        })
      })
  }
}


export const getData = () => {
  return dispatch => {
    axios.get('/api/getPost')
      .then(res => {
        dispatch({
          type: "GET_DATA",
          payload: res.data
        })
      })
  }
}

export const getNews = () => {
  return dispatch => {
    axios.get('/api/News')
      .then(res => {
        dispatch({
          type: "GET_NEWS",
          payload: res
        })
      })
  }
}

// export const addComment = (comment) => {
//   return dispatch => {
//     axios.post('/api/comment', comment)
//       .then(() => {
//         dispatch({
//           type: 'COMMENT',
//           payload: comment
//         })
//       })
//   }
// }