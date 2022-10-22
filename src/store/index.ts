import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';

export default (initialState = {}) =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));
