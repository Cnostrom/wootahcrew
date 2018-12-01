import axios from 'axios';
import {push} from 'connected-react-router';

export const login = () => {
  return dispatch => {
    axios.post('api/login')
    .then(res => {
      dispatch({
        type: "USER",
        payload:res
      });
      if (res){
        dispatch(push('/dashboard'))
      }
    })
  }
}

export const getSession = () => {
  return dispatch => {
    axios.get('/api/session')
    .then(res => {
      dispatch({
        type:"USER",
        payload:res
      });
      if (res){
        dispatch(push('/dashboard'))
      }
      else {}
    })
  }
}

export const getUser = () => {
  return dispatch => {
    axios.get('/api/get')
    .then(res => {
      dispatch({
        type: "GET_USER",
        payload:res.data
      })
    })
  }
}