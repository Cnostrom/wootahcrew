import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './Reducer';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../../history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  user: reducer
})

export default createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history)));